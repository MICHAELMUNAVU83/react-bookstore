import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <h3>BOOKSTORE CMS</h3>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </div>
);

export default Navbar;
