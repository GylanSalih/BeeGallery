import React, { useState, useEffect } from "react";
import styles from "./CardsGrid.module.scss";

// Import Components
import Card from "../cards/Card";
import CardsSekeleton from "../cards-skeleton/CardsSekeleton";

// import { createClient } from 'pexels';
// const client = createClient('zGUsUrlgTDV0dkMY9rMjPhHtvYf8EfK0O25egHt5eJsp9Z6V3kD0uWnX');

const CardsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorBtn, setShowErrorBtn] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const loadApiData = async () => {
    setShowErrorBtn(false);
    setIsLoading(true);

    // fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", {
    //   headers: { Authorization: "zGUsUrlgTDV0dkMY9rMjPhHtvYf8EfK0O25egHt5eJsp9Z6V3kD0uWnX" }
    // })

    // fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", {
    //   headers: {
    //     Authorization: 'zGUsUrlgTDV0dkMY9rMjPhHtvYf8EfK0O25egHt5eJsp9Z6V3kD0uWnX'
    //   })
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err))
    
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=30"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setShowErrorBtn(true);
      console.error("Error loading api Data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadApiData();
  }, []);

  const LoadApiAgain = () => {
    loadApiData();
  };

  /* --------------------- Ticket 3 --------------------- */
  const grayscaleHandler = () => {
    setIsGrayscale((prev) => !prev);
  };

  const blurHandler = () => {
    setIsBlur((prev) => !prev);
  };


  // logik here
  const buildImageUrl = (baseUrl) => {
    console.log(baseUrl);
    return baseUrl;
  };


  /* --------------------- Ticket 3 --------------------- */

  const visibleData = data.slice(0, visibleCount);
  const hasMore = data.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.titleContainer}>
        <span className={styles.subtitle}>BeeGallery</span>
        <h2>Gallery Heading h2</h2>
      </div>

      {isLoading ? (
        <div className={styles.page}>
          <CardsSekeleton />
        </div>
      ) : (
        <>
          {showErrorBtn && (
            <div className={styles.errorContainer}>
              <button className={styles.errorBtn} onClick={LoadApiAgain}>
                Try Again
              </button>
            </div>
          )}

          <div className={styles.btnGrayBlur}>
            <button 
              className={isGrayscale ? styles.active : ''}
              onClick={grayscaleHandler}
            >
              Grayscale
            </button>
            <button 
              className={isBlur ? styles.active : ''}
              onClick={blurHandler}
            >
              Blur
            </button>
          </div>

          <div className={styles.grid}>
            {visibleData.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                author={item.author}
                width={item.width}
                height={item.height}
                url={item.url}
                download_url={buildImageUrl(item.download_url)}
                seed={item.seed}
              />
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreContainer}>
              <button
                className={styles.loadMoreButton}
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CardsGrid;
