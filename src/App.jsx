import React from "react";
import { useEffect } from "react";
import BookCreate from "./components/book-create/book-create.component";
import BookList from "./components/book-list/book-list.component";
import useBooksContext from "./hooks/use-books-context";
const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
