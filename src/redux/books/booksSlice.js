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

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook) => {
  try {
    await api.post('/books', newBook);
    return newBook;
  } catch (error) {
    throw new Error('Error adding book:', error.message);
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
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
      .addCase(addBookAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books.push(action.payload);
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBookAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
