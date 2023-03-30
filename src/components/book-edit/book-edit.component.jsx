import React from "react";
import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const edittedBook = { id: book.id, title };
    onSubmit(edittedBook);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
