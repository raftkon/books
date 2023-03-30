import React from "react";
import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="book-create" style={{ zIndex: "1" }}>
      <h3>Add a Book</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={title}
        />
        <button className="button">Add new book</button>
      </form>
    </div>
  );
};

export default BookCreate;
