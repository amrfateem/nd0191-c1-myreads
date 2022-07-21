import { Link } from "react-router-dom";
import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

import { Throttle } from "react-throttle";
import PropTypes from "prop-types";

const Search = ({ books, update }) => {
  const [key, setKey] = useState("");
  const [booksGot, setBooksGot] = useState([]);

  const updateSearch = (key) => {
    setKey(key);
    searchBooksCollection(key);
  };

  const searchBooksCollection = (key) => {
    if (key) {
      BooksAPI.search(key).then((searchedBooks) => {
        searchedBooks.error ? setBooksGot([]) : setBooksGot(searchedBooks);
      });
    } else {
      setBooksGot([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <Throttle time="400" handler="onChange">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => updateSearch(e.target.value)}
            />
          </Throttle>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {key &&
            booksGot.map((bookGot) => {
              let location = "none";

              books.map((book) =>
                book.id === bookGot.id ? (location = book.shelf) : ""
              );

              return (
                <li key={bookGot.id}>
                  <Book book={bookGot} location={location} update={update} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
};

export default Search;
