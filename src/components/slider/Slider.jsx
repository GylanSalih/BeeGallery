import React, { useState } from 'react';
import styles from "./Slider.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useGalleryPoster } from "../../context/Context";

const SlideItems = [
    {
        id: 1,
        title: "Slider 1 Title",
        description: "Description",
        Img: "./images/ColorPalettes.png",
        alt: "Color Palettes Collection",
    },
    {
        id: 2,
        title: "Slider 2 Title",
        description: "Description",
        Img: "./images/DarkDefault.png",
        alt: "Dark Theme Examples",
    },
    {
        id: 3,
        title: "Slider 3 Title",
        description: "Description",
        Img: "./images/GoldenBee.webp",
        alt: "Golden Bee Design",
    },
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { data } = useGalleryPoster();

    const goToNext = () => {
        if (currentSlide === SlideItems.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const goToPrevious = () => {
        if (currentSlide === 0) {
            setCurrentSlide(SlideItems.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderContent}>
                <img
                    // src={data.download_url}
                    // src={SlideItems[currentSlide].download_url} 
                    src={SlideItems[currentSlide].Img} 
                    alt={SlideItems[currentSlide].alt} 
                    className={styles.sliderImg}
                />
                <div className={styles.textArea}>
                    <h2>{SlideItems[currentSlide].title}</h2>
                    <p>{SlideItems[currentSlide].description}</p>
                </div>
            </div>
            
            <button className={styles.navButtonLeft} onClick={goToPrevious}>
                <ChevronLeft size={24} />
            </button>
            <button className={styles.navButtonRight} onClick={goToNext}>
                <ChevronRight size={24} />
            </button>
            
            
            <div className={styles.dots}>
                {SlideItems.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? styles.dotActive : styles.dotInactive}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}