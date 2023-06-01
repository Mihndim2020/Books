import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatetedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatetedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} />
    </div>
  );
}

export default App;
