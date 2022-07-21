import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from './Form';
import { getBooksApi, removeApi } from '../redux/books/books';

function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksApi());
  }, [dispatch]);

  const handle = (e) => {
    dispatch(removeApi(e.target.id));
  };
  const render = books.map((book) => (
    <div className="divbook" id={book.id} key={book.id}>
      <span>{book.title}</span>
      {' '}
      by
      {' '}
      <span>{book.author}</span>
      <div>
        <button type="button" onClick={handle} id={book.id}>
          Delete
        </button>
      </div>

    </div>
  ));

  return (
    <div>
      {render}

      <Form />
    </div>
  );
}

export default Book;
