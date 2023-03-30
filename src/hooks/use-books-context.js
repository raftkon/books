import { useContext } from "react";
import { BooksContext } from "../context/books.context";

function useBooksContext() {
  return useContext(BooksContext);
}
export default useBooksContext;
