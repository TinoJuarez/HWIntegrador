import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Nav = ({ onSearch, setAccess, randomize }) => {
  const handleLogOut = () => {
    setAccess(false);
  };

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/home', label: 'Home' },
    { to: '/favorites', label: 'Favorites' }
  ];

  return (
    <div>
      <SearchBar onSearch={onSearch} />

      {navLinks.map((link) => (
        <Link key={link.to} to={link.to}>
          <button>{link.label}</button>
        </Link>
      ))}

      <button onClick={handleLogOut}>Log out</button>
      <button onClick={randomize}>ADD RANDOM</button>
    </div>
  );
};

export default Nav;




