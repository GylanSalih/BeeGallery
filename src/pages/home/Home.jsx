import React, { useState, useEffect } from "react";
import { ArrowUpRight, Search, ChevronLeft, ChevronRight } from "lucide-react";

// styles
import styles from "./Home.module.scss";

// Componente Importieren
import Card from "../../components/Cards/Card"
import Filterbar from "../../components/filterbar/Filterbar";
import Slider from "../../components/slider/Slider"

export default function Home() {



  return (
    <div className={styles.simpleWrapper}>
      
    <Slider/>
      <Filterbar/>
      
      <h1>Default Template</h1>
      <div className={styles.Cardcontainer}>
        <div className={styles.Cardcontent}>
          <div className={styles.cardTextLeft}>
            <ArrowUpRight size={24} className={styles.IconGlobal}/>
            <Search size={24} className={styles.IconGlobal}/>
            <ChevronLeft size={24} className={styles.IconGlobal}/>
            <ChevronRight size={24} className={styles.IconGlobal}/>
          </div>
        </div>
      </div>

      {/* Default Design Starts */}
      <div className={styles.textWrapper}>
        <h1>H1 Heading</h1>
        <h2>H2 Heading</h2>
        <h3>H3 Heading</h3>
        <h4>H4 Heading</h4>
        <h5>H5 Heading</h5>
        <h6>H6 Heading</h6>
        <p>Paragraph</p>
      </div>

      <h1>Default Buttons</h1>
      <div className={styles.BtnContainer}>
        <button className={styles.AddMoreBtn}>Add More</button>
        <button className={styles.deleteBtn}>Delete</button>
        <button className={styles.ViewProjectBtn}>View Project</button>
      </div>


      <div className={styles.cardContainer}>
        <Card/>
      </div>
    </div>
  );
}
