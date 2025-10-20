import React, { useState, useEffect } from 'react';
import styles from "./Slider.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Slider() {

const [activeImage, setActiveImage] = useState();

const goToNextPage = () => {
    if(activeImage === SlideItems.length -1) {
        setActiveImage(0);
    }
    setActiveImage(activeImage +1);
    console.log(activeImage);
}

const goToPreviousPage = () => {
    setActiveImage(activeImage -1);
    console.log(activeimage -1);
    console.log(activeImage);
}


const SlideItems = [
    {
        id: 1,
        title: "Test Titlte for Slider 1",
        description: "Small Description for Slider 1",
        Img: "./images/ColorPalettes.png",
        alt: "Slider Alt for Slide 1",
    },
    {
        id: 2,
        title: "Test Titlte for S Slider 2",
        description: "Small Description for Slider 2",
        Img: "./images/ColorPalettes.png",
        alt: "Slider Alt for Slide 1",
    },
    {
        id: 3,
        title: "Test Titlte for Slider 3",
        description: "Small Description for Slider 3",
        Img: "./images/ColorPalettes.png",
        alt: "Slider Alt for Slide 1",
    },
];


  return (
    <div className="app">
      <h1>Slider</h1>
      <ChevronLeft size={32} className={styles.iconLeft} onClick={goToPreviousPage}/>
      <ChevronRight size={32} className={styles.iconRight} onClick={goToNextPage}/>

      {SlideItems.map((element, index) => (
        <div className={styles.parentContainer} key={index.id}>
            <img src={element.Img} alt={element.alt} className={styles.sliderImg}/>
            <div className={styles.TextArea}>
                <h1>{element.title}</h1>
                <p>{element.description}</p>
            </div>
        </div>
      ))}


    </div>
  );
}