import React from "react";
import Card from "../Cards/Card";
import styles from "./CardsGrid.module.scss";

const CardsGrid = ({ 
  articles = []
}) => {
  // Fallback-Daten wenn keine Artikel übergeben werden
  const defaultArticles = [
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
    }
  ];

  const articlesToRender = articles.length > 0 ? articles : defaultArticles;

  return (
    <div className={styles.gridContainer}>
      <div className={styles.header}>
        <span className={styles.subtitle}>BeeGallery</span>
        <h2>Discover My Creative Work</h2>
      </div>
      
      <div className={styles.grid}>
        {articlesToRender.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            date={article.date}
            categories={article.categories}
            tags={article.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
