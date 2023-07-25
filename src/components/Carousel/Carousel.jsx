import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { BsChevronLeft, BsChevronRight, BsX } from "react-icons/bs";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const imageElement = document.querySelector(`.${styles.image}`);
    imageElement.classList.remove(styles.fade);
    void imageElement.offsetWidth; // Trigger reflow to restart the animation
    imageElement.classList.add(styles.fade);

    if (isFullScreen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when component unmounts
    };
  }, [currentImageIndex, isFullScreen]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrowButton} onClick={goToPreviousImage}>
        <BsChevronLeft className={styles.arrowIcon} />
      </button>
      <img
        className={styles.image}
        src={images[currentImageIndex]}
        alt="Carousel Image"
        onClick={openFullScreen}
      />
      {isFullScreen && (
        <div className={styles.dialogBox}>
          <div className={styles.dialogContent}>
            <button className={styles.closeButton} onClick={closeFullScreen}>
              <BsX className={styles.closeIcon} />
            </button>
            <img className={styles.fullScreenImage} src={images[currentImageIndex]} alt="Carousel Image" />
          </div>
        </div>
      )}
      <button className={styles.arrowButton} onClick={goToNextImage}>
        <BsChevronRight className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default Carousel;
