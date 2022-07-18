import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <button onClick={() => { dispatch(checkStatus()); }} type="button">Check Status</button>
      {categories.map((category) => (
        <p key={category.id}>
          {' '}
          {category.title}
        </p>
      ))}
    </div>
  );
}

export default Categories;
