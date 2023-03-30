import React from "react";
import BookShow from "../book-show/book-show.component";
import useBooksContext from "../../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
