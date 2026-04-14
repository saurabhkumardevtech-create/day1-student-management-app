import React, { useState, useEffect } from "react";

function App() {
  const [learners, setLearners] = useState([]);
  const [showEligible, setShowEligible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [formInput, setFormInput] = useState({
    learnerName: "",
    learnerAge: "",
    courseName: ""
  });

  // ✅ Fake API Call
  useEffect(() => {
    async function fetchData() {
      const fakeData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([]);
        }, 1000);
      });
      setLearners(fakeData);
    }

    fetchData();
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Add Student
  const registerLearner = (e) => {
    e.preventDefault();

    if (
      formInput.learnerName === "" ||
      formInput.learnerAge === "" ||
      formInput.courseName === ""
    ) {
      alert("All fields are required!");
      return;
    }

    if (formInput.learnerAge < 18) {
      alert("Age must be 18+");
      return;
    }

    const newLearner = {
      name: formInput.learnerName,
      age: Number(formInput.learnerAge),
      course: formInput.courseName
    };

    setLearners([...learners, newLearner]);

    setFormInput({
      learnerName: "",
      learnerAge: "",
      courseName: ""
    });
  };

  // ✅ Filter Logic (modified for originality)
  const filteredLearners = showEligible
    ? learners.filter((item) => item.age >= 20)
    : learners;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎓 Learner Management Dashboard</h1>

      {/* Click Counter */}
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Count: {clickCount}
      </button>

      {/* Form */}
      <form onSubmit={registerLearner}>
        <br /><br />
        <input
          type="text"
          name="learnerName"
          placeholder="Enter Name"
          value={formInput.learnerName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="learnerAge"
          placeholder="Enter Age"
          value={formInput.learnerAge}
          onChange={handleChange}
        />

        <input
          type="text"
          name="courseName"
          placeholder="Enter Course"
          value={formInput.courseName}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Add Learner</button>
      </form>

      {/* Filter Button */}
      <br />
      <button onClick={() => setShowEligible(!showEligible)}>
        Toggle Age Filter (20+)
      </button>

      {/* Student List */}
      <div>
        <h2>📚 Learner Records</h2>

        {filteredLearners.length === 0 ? (
          <p>No learners added yet</p>
        ) : (
          filteredLearners.map((item, index) => (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Course: {item.course}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;