import React from 'react';
import PropTypes from 'prop-types';

const BookSection = ({
  bookId, title, author, category, onClick,
}) => (
  <div className="book-card">
    <div className="book-main-content">
      <div className="book-info">
        <h4 className="book-section-category">{category}</h4>
        <h2 className="book-section-title">{title}</h2>
        <h5 className="book-section-author">{author}</h5>
      </div>
      <div className="book-manu-container">
        <ul className="book-menu-list">
          <li className="book-menu-item">
            <button className="book-menu-button" type="button">
              Comments
            </button>
          </li>
          <li className="book-menu-item">
            <button className="book-menu-button" type="button" onClick={onClick} id={bookId}>
              Remove
            </button>
          </li>
          <li className="book-menu-item">
            <button className="book-menu-button" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="book-progress-section">
      <progress
        value="75"
        min="0"
        max="100"
        style={{
          height: 0,
          width: 0,
        }}
      >
        64%
      </progress>
      <div className="book-info-progress">
        <h3 className="level-progress">50%</h3>
        <p className="status-progress">Completed</p>
      </div>
    </div>
    <div className="book-chapter-section">
      <h3 className="book-current-chapter">CURRENT CHAPTER</h3>
      <h2 className="book-title-chapter">Chapter 17</h2>
      <button className="button-chapter" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

BookSection.defaultProps = {
  title: '',
  author: '',
  bookId: '',
  onClick: '',
  category: '',
};

BookSection.propTypes = {
  bookId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func,
};

export default BookSection;
