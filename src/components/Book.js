/* eslint-disable react/prop-types */
import React from 'react';
import Form from './Form';

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
      <Form />

    </div>
  );
}

export default Book;
