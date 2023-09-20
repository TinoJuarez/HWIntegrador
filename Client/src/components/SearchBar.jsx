import React, { useState } from 'react';
import styles from './Search.module.css';

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
  };

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type='search'
        placeholder='Buscar por ID'
        onChange={handleChange}
        value={id}
      />
      <button className={styles.button} onClick={handleSearch}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;

