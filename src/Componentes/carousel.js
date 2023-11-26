'use client'

import React, { useState } from 'react';
import styles from '../app/page.module.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.imagecarousel}>
      <div className={styles.carouselcontainer}>
        {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
          <div key={index} className={styles.carouselitem}>
            <img src={image.url} alt={image.description} />
            <h2>{image.titulo}</h2>
            <p className={`${styles.description} description`}>{image.description}</p>
            <p className={`${styles.precio} precio`}>{image.precio}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonCarousel} onClick={handlePrev}>Anterior</button>
        <button className={styles.buttonCarousel} onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;