import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

const Cards = ({ characters, onClose }) => {
  return (
    <div className={styles.div}>
      {characters?.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Cards;

