import React from "react";
import Book from "./Book";

import PropTypes from "prop-types";


const BookStore = ({ books, locationName, location, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {locationName} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, id) => (
            <li key={id}>
              <Book book={book} location={location} update={update} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookStore.propTypes = {
  books: PropTypes.array.isRequired,
  locationName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default BookStore;
