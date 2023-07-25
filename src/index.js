import React from 'react';
import ReactDOM from 'react-dom/client'; // Actualiza esta línea
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.css';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
