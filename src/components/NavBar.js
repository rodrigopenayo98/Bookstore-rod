import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => (
  <nav className="nav">
    <span className="Bookstore-CMS Text-Style-3">Bookstore CMS</span>
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-link">
          Books
        </Link>
      </li>
      <li>
        <Link to="/categories" className="nav-link">
          Categories
        </Link>
      </li>
    </ul>
    <FaUser />
  </nav>
);

export default NavBar;
