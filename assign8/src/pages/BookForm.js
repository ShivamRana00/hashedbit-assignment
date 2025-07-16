import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

function BookForm() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("booking", JSON.stringify(form));
    navigate("/confirm");
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Enter Your Details</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required /><br /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required /><br /><br />
      <input placeholder="Mobile" onChange={(e) => setForm({ ...form, mobile: e.target.value })} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
