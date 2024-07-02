import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.module.css';

const Navbar = () => {
  const loginCount = useSelector((state) => state.auth.loginCount);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/users">User List</Link></li>
        </ul>
      </nav>
      <div>Login Count: {loginCount}</div>
    </div>
  );
};

export default Navbar;
