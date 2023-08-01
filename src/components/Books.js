import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import { removeBook } from '../redux/books/booksSlice';
import BookSection from './BookSection';

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
      <div className="book-section">
        {books.map((book) => (
          <BookSection
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            bookId={book.id}
            onClick={() => handleDeleteBook(book.item_id)}
          />
        ))}
      </div>
      <div className="line-form" />
      <BookForm />
    </>
  );
};

export default Books;
