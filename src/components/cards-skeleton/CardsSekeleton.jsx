import React from 'react';
import styles from './CardsSkeleton.module.scss';


// Ich liebe es habs von MDX datei
const SkeletonCard = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Figure}>
        <div className={styles.Image}></div>
        <div className={styles.Overlay}>
          <div className={styles.OverlayContent}>
            <div className={styles.ItemTitle}></div>
            <div className={styles.ItemCategory}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Grid Skeleton Component
export const GridSkeleton = () => {
  // Create an array of 9 skeleton cards for the grid
  const skeletonCards = Array(9).fill("");

  console.log(skeletonCards);

  return (
      <div className={styles.Grid}>
        {/* Grid Items Skeleton */}
        {skeletonCards.map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
   );
};


// Main Portfolio Skeleton Component
const PortfolioSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <GridSkeleton />
    </div>
  );
};

export default PortfolioSkeleton;