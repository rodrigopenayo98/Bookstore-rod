import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <span className="logo">Bookstore CMS</span>
    <ul className="nav-list">
      <li><Link to="/" className="nav-link">Books</Link></li>
      <li><Link to="/categories" className="nav-link">Categories</Link></li>
    </ul>
    <span className="login-icon">Login Icon</span>
  </nav>
);

export default NavBar;
