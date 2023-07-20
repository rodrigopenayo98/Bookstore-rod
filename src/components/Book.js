import PropTypes from 'prop-types';
import React from 'react';

const Book = ({ bookTitle, author }) => (
  <li>
    <h1>{bookTitle}</h1>
    <p>{author}</p>
    <button type="button">Delete</button>
  </li>
);

Book.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
