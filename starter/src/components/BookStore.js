import React from "react";
import Book from "./Book";

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

export default BookStore;
