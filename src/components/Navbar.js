import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <h3>BOOKSTORE CMS</h3>
      <Link to="/">Books</Link>
      <Link className="catslink" to="/categories">Categories</Link>
      <Link className="icon" to="/"><FaUserAlt /></Link>
    </nav>
  </div>
);

export default Navbar;
