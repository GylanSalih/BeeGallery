import React from 'react';
import CardsGrid from '../../components/cards-grid/CardsGrid';
import Slider from '../../components/slider/Slider';
import Filterbar from '../../components/filterbar/Filterbar';
import styles from './Gallery.module.scss';


const Gallery = () => {

  return (
    <div className={styles.galleryContainer}>
      <CardsGrid />
    </div>
  );
};

export default Gallery;
