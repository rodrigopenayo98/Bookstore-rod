import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../components/Api';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  status: 'idle',
  error: null,
};

export const addBook = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await api.post('/books', newBook);
    return newBook;
  } catch (error) {
    throw new Error('Error adding book:', error.message);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await api.delete(`/books/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error('Error removing book:', error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
