import React from "react";

const BookList = ({ books, onBookSelect }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-item"
          onClick={() => onBookSelect(book)}
        >
          <img src={book.coverImageUrl} alt={book.title} />
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
