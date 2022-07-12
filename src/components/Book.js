/* eslint-disable react/prop-types */
import React from 'react';

function Book({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {book.Title}
          {' '}
          by
          {' '}
          {book.Author}
        </div>
      ))}

    </div>
  );
}

export default Book;
