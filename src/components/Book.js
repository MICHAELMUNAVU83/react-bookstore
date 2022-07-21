import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {  getBooksApi, removeApi} from "../redux/books/book";

function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getBooksApi())

  }, [dispatch])

  const handle = (e) => {
    dispatch(removeApi(e.target.id));
  };
  let render = books.map((book) => (
    <div id={book.id} key={book.id}>
      <p>{book.title}</p>
      <button onClick={handle} id={book.id}>
        Delete
      </button>
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
