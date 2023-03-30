import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookCreate from "./components/book-create/book-create.component";
import BookList from "./components/book-list/book-list.component";
import axios from "axios";
const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get("http://localhost:3001/books", {});
      setBooks(response.data);
    }
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
    // setBooks(updatedBooks);
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
