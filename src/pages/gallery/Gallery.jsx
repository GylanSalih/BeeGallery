import React from 'react';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Slider from '../../components/slider/Slider';
import styles from './Gallery.module.scss';

const Gallery = () => {

  // Beispiel-Daten - später können diese aus einer API oder Dateien geladen werden
  const articles = [
    {
      id: 1,
      title: "Modern Web Design",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      image: "/images/CardContentDefault.jpg",
      date: "20.10.2025",
      categories: ["Design", "UI/UX"],
      tags: ["Web", "Mobile", "App"]
    },
    {
      id: 2,
      title: "Creative Photography",
      description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      image: "/images/CardContentDefault.jpg",
      date: "18.10.2025",
      categories: ["Photography", "Art"],
      tags: ["Portrait", "Nature", "Studio"]
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros.",
      image: "/images/CardContentDefault.jpg",
      date: "15.10.2025",
      categories: ["Marketing", "Strategy"],
      tags: ["SEO", "Social", "Analytics"]
    },
    {
      id: 4,
      title: "Brand Identity",
      description: "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.",
      image: "/images/CardContentDefault.jpg",
      date: "12.10.2025",
      categories: ["Branding", "Identity"],
      tags: ["Logo", "Brand", "Identity"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      image: "/images/CardContentDefault.jpg",
      date: "10.10.2025",
      categories: ["Development", "Mobile"],
      tags: ["React Native", "iOS", "Android"]
    },
    {
      id: 6,
      title: "E-commerce Solutions",
      description: "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
      image: "/images/CardContentDefault.jpg",
      date: "08.10.2025",
      categories: ["E-commerce", "Web"],
      tags: ["Shopify", "WooCommerce", "Custom"]
    }
  ];

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.sliderWrapper}>
        <Slider />
      </div>
      <CardsGrid 
        articles={articles}
      />
    </div>
  );
};

export default Gallery;
