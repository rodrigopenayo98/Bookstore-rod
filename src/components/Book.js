import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const Book = ({ bookTitle, author, onDelete }) => (
  <li>
    <div>
      <strong>Title:</strong>
      {' '}
      {bookTitle}
    </div>
    <div>
      <strong>Author:</strong>
      {' '}
      {author}
    </div>
    <Button text="Delete" handleAddBook={onDelete} />
  </li>
);

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
