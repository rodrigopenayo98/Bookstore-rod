import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { addBookAsync } from '../redux/books/booksSlice';

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
      await dispatch(addBookAsync(newBook));
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  return (
    <div>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button text="Add Book" handleAddBook={handleAddBook} />
      </form>
    </div>
  );
};

export default BookForm;
