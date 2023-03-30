import React from "react";
import { useState } from "react";
import BookCreate from "./components/book-create/book-create.component";
import BookList from "./components/book-list/book-list.component";

const App = () => {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (edittedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === edittedBook.id) {
        return edittedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
    </div>
  );
};

export default App;
