import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import api from './Api';
import Button from './Button';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    const newItemId = `item${Math.random().toString(36).substr(2, 9)}`;

    const newBook = {
      item_id: newItemId,
      title,
      author,
      category: 'Fiction',
    };

    try {
      await api.post('/books', newBook);
      dispatch(addBook(newBook));

      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error.message);
    }
  };

  const handleRemoveBook = async (bookId) => {
    try {
      await api.delete(`/books/${bookId}`);
      dispatch(removeBook(bookId));
    } catch (error) {
      console.error('Error removing book:', error.message);
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

      <div>
        <h2>Books List</h2>
        <ul>
          {Array.isArray(books) && books.map((book) => (
            <li key={book.item_id}>
              {book.title}
              {' '}
              -
              {book.author}
              {' '}
              <Button text="Remove" handleOnClick={() => handleRemoveBook(book.item_id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookForm;
