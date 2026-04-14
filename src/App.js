import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: ""
  });

  // Input handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);

    setFormData({
      name: "",
      age: "",
      course: ""
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Management App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      <h2>Student List</h2>

      <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} | {s.age} | {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;