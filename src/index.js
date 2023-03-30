import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BooksProvider } from "./context/books.context";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BooksProvider value={5}>
    <App />
  </BooksProvider>
);
