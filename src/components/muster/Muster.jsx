import React from "react";

import styles from "./Muster.module.scss";


export default function TestComponent() {
  return (
    <div className={styles.gallery}>
      <div className={styles.clippedBorder}>
        <img
          src="../../../public/images/CardContentDefault.jpg"
          alt="Default Design"
          id="clipped"
        />
      </div>

      <div className={styles.clippedBorder}>
        <img
          src="../../../public/images/CardContentDefault.jpg"
          alt="Default Design"
          id="clipped"
        />
      </div>

      <div className={styles.clippedBorder}>
        <img
          src="../../../public/images/CardContentDefault.jpg"
          alt="Default Design"
          id="clipped"
        />
      </div>

      <div className={styles.clippedBorder}>
        <img
          src="../../../public/images/CardContentDefault.jpg"
          alt="Default Design"
          id="clipped"
        />
      </div>

      <div className={styles.shadow}></div>
    </div>
  );
}
