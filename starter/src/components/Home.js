import React from "react";
import { Link } from "react-router-dom";
import BookStore from "./BookStore";

import PropTypes from "prop-types";


const HomeView = ({ books, update }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <BookStore
          locationName='Currently Reading'
          location='currentlyReading'
          books={books.filter((book) => book.shelf === "currentlyReading")}
          update={update}
        />
        <BookStore
          locationName='Want to Read'
          location='wantToRead'
          books={books.filter((book) => book.shelf === "wantToRead")}
          update={update}
        />
        <BookStore
          locationName='Read'
          location='read'
          books={books.filter((book) => book.shelf === "read")}
          update={update}
        />
      </div>
      <Link className='open-search' to='/search'>
        Add a book
      </Link>
    </div>
  );
};

HomeView.propTypes = {
  books: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
};


export default HomeView;