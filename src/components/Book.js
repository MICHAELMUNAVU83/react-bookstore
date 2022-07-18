import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { deleteBook } from '../redux/books/books';

function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const rendereach = books.map((book) => (
    <div key={book.id}>
      <span>{book.title}</span>
      {' '}
      <span>by</span>
      {' '}
      <span>{book.author}</span>
      <div>
        <button onClick={() => { dispatch(deleteBook({ id: book.id })); }} id={book.id} type="button">
          DELETE
        </button>
      </div>
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
