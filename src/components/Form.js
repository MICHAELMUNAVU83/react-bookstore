import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooksApi, getBooksApi } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitlechange = (e) => setTitle(e.target.value);
  const onTAuthorchange = (e) => setAuthor(e.target.value);
  const onSubmit = () => {
    dispatch(addBooksApi({
      title,
      author,
      id: Date.now(),
    }));
    dispatch(getBooksApi());
    setAuthor('');
    setTitle('');
  };

  return (
    <div>
      <div>
        <h3>ADD A NEW BOOK</h3>
      </div>
      <div className="formdiv">
        <input className="each-input" placeholder="Book title" value={title} onChange={onTitlechange} />
        <input className="each-input" placeholder="Author" value={author} onChange={onTAuthorchange} />
        <button className="submitbtn" onClick={onSubmit} type="button">add book</button>

      </div>

    </div>
  );
}

export default Form;
