import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleImageClick = (e) => {
    const { offsetX } = e.nativeEvent;
    if (offsetX < e.target.offsetWidth / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const { clientX } = e.changedTouches[0];
    const deltaX = clientX - startX;
    if (deltaX > 50) {
      prevImage();
    } else if (deltaX < -50) {
      nextImage();
    }
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <img
        className={styles.image}
        src={images[currentImageIndex]}
        alt="Carousel Image"
        onClick={handleImageClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default Carousel;
