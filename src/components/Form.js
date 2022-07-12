import React from 'react';

function Form() {
  return (
    <div>
      <div>
        <h3>ADD A NEW BOOK</h3>
      </div>
      <div>
        <input placeholder="Book title" />
        <input placeholder="Author" />
        <button type="button">add book</button>

      </div>

    </div>
  );
}

export default Form;
