import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleDeleteBook = async (bookId) => {
    try {
      await dispatch(removeBook(bookId));
    } catch (error) {
      console.error('Error removing book:', error.message);
    }
  };

  return (
    <>
      <ul className="book-list">
        {books.map((book) => (
          <Book
            key={book.item_id}
            bookTitle={book.title}
            author={book.author}
            onDelete={() => handleDeleteBook(book.item_id)}
          />
        ))}
      </ul>
      <BookForm />
    </>
  );
};

export default Books;
