import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import PageNotFound from "./components/Page404";

import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  const [books, setBooks] = useState([]);

  // store incoming data
  const getBooks = async () => {
    const data = await BooksAPI.getAll();
    setBooks(data);
  };

  // To get books on start rather then firing randomly
  useEffect(() => {
    getBooks();
  }, []);

  // update function when choosing location
  const update = (book, location) => {
    BooksAPI.update(book, location)
      .then(() => BooksAPI.getAll())
      .then((books) => setBooks(books));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
        <Route exact path="*" element={<PageNotFound />} />
          <Route
            exact
            path="/"
            element={<Home books={books} update={update} />}
          />
          <Route
            exact
            path="/search"
            element={<Search books={books} update={update} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
