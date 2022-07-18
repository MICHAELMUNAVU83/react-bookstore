import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

function Book() {
  const books = useSelector((state) => state.books);
  const rendereach = books.map((book) => (
    <div key={book.id}>
      <span>{book.title}</span>
      {' '}
      <span>by</span>
      {' '}
      <span>{book.author}</span>
      <button type="button">DELETE</button>
    </div>
  ));
  return (
    <div>
      {rendereach}

      <Form />

    </div>
  );
}

export default Book;
