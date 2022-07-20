import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addaBook = () => {
    dispatch(
      addBook({
        title,
        author,
        id: Date.now(),
      }),
    );

    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <div>
        <h3>ADD A NEW BOOK</h3>
      </div>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button onClick={addaBook} type="button">
          add book
        </button>
      </div>
    </div>
  );
}

export default Form;
