import React from 'react';

const BookForm = () => (
  <div>
    <h1>ADD NEW BOOK</h1>
    <form>
      <input type="text" id="InputNameBook" placeholder="Book Title" />
      <input type="text" id="InputNameAuthor" placeholder="Author" />
      <button type="submit" id='BookFormButton'>Add Book</button>
    </form>
  </div>
);

export default BookForm;