import React from "react";
import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
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
