import React, { useState } from "react";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";

// function getDate() {
//   const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date= today.getDate();
//   return `${date}/${month}/${year}`;
// }

// Datum von heute speichern in einer Variable
// let Date = new Date().toLocaleDateString()


import styles from "./ModernArticle.module.scss";



export default function ModernArticle() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardParent}>
        <img
          src="/images/CardContentDefault.jpg"
          alt="Image Article"
          className={styles.image}
        />


        <div className={styles.leftbottom}>
          <div className={styles.CategoryParents}>
          <Tag size={18} className={styles.catIcons}/>
          <button className={styles.CategoryBtns}>Tags</button>
          </div>
          <div className={styles.CategoryParents}>
          <Tag size={18} className={styles.catIcons}/>
          <button className={styles.CategoryBtns}>Tags</button>
          </div>
        </div>


        
        <div className={styles.righttop}>
          <button className={styles.TagsBtn}>Tags</button>
          <button className={styles.TagsBtn}>Tags</button>
          <button className={styles.TagsBtn}>Tags</button>
        </div>

        <div className={styles.lefttop}>
        <Calendar size={18} className={styles.IconGlobal}/>
        <p>20.10.2025</p> 
        </div>

        <div className={styles.rightbottom}>
          <ArrowUpRight size={32} className={styles.IconGlobal}/>
        </div>

        <div className={styles.centeredText}>
          <h1 className={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </h1>
        </div>

        {/* <div className={styles.textGrid}>
        <p>Paragraph</p>
        <p>Paragraph</p>
        <p>Paragraph</p>
        </div> */}
      </div>
    </div>
  );
}
