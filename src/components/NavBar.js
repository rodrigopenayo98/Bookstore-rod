import React from 'react'; 
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className='nav'>
      <span className='logo'>Bookstore CMS</span>
      <ul className='nav-list'>
      <li><Link className='nav-link'>Books</Link></li>
      <li><Link className='nav-link'>Categories</Link></li>
      </ul>
      <span className='login-icon'>Login Icon</span>
    </nav>
  );
};

export default NavBar;