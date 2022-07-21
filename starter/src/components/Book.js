import React from "react";

const Book = ({ location, book, update }) => {
  let BookImage = book.imageLinks ? book.imageLinks.thumbnail : "";
  const changeLocation = (e) => {
    const newShelf = e.target.value;

    if (update) {
      update(book, newShelf);
    }
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url( ${BookImage} )`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={location} onChange={changeLocation}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading"> Currently Reading </option>
            <option value="wantToRead"> Want to Read </option>
            <option value="read"> Read </option>
            <option value="none"> Remove </option>
          </select>
        </div>
      </div>
      <div className="book-title"> {book.title} </div>
      <div className="book-authors"> {book.authors} </div>
    </div>
  );
};

export default Book;
