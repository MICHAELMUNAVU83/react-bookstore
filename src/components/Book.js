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
      <div>
        <p className="grayone">{book.category}</p>
        <p className="authortitle">{book.title}</p>
        <p className="authorname">{book.author}</p>
        <span>Comments</span>
        |
        <span><button className="deletebtn" type="button" id={book.id} onClick={handle}>Remove</button></span>
        |
        <span>Edit</span>
      </div>
      <div className="percentage">
        <p className="circle">
          <p className="insidecircle" />
        </p>
        <div>
          <p className="percentNo">75%</p>
          <p>completed</p>
        </div>
      </div>
      <div>
        <p className="grayone">CURRENT CHAPTER</p>
        <p>chapter 17</p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="holdingbooks">{render}</div>
      <Form />
    </div>
  );
}

export default Book;
