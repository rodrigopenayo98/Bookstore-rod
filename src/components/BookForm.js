import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    const newItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    const newBook = {
      item_id: newItemId,
      title,
      author,
      category: 'Fiction',
    };

    try {
      await dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <div className="container-form">
      <h1 className="title-form">ADD NEW BOOK</h1>
      <form className="form">
        <input
          className="input-title-book"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="input-container">
          <div className="input-author-book-container">
            <input
              className="input-author-book"
              type="text"
              placeholder="Category"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <div className="dropdown-container">
              {/* Contenido del dropdown aquí */}
            </div>
          </div>
        </div>
        <Button text="ADD BOOK" handleAddBook={handleAddBook} />
      </form>
    </div>
  );
};

export default BookForm;
