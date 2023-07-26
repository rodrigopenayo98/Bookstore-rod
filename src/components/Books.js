import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (title, author) => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
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
      <BookForm onAddBook={handleAddBook} />
    </>
  );
};

export default Books;
