import React from "react";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import styles from "./Card.module.scss";

const Card = ({ 
  title = "Lorem ipsum dolor sit amet",
  description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  image = "/images/CardContentDefault.jpg",
  date = "20.10.2025",
  categories = ["Design", "UI/UX"],
  tags = ["Web", "Mobile", "App"]
}) => {

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardParent}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <div className={styles.leftbottom}>
          {categories.map((category, index) => (
            <div key={index} className={styles.CategoryParents}>
              <Tag size={18} className={styles.catIcons}/>
              <button className={styles.CategoryBtns}>{category}</button>
            </div>
          ))}
        </div>

        <div className={styles.righttop}>
          {tags.map((tag, index) => (
            <button key={index} className={styles.TagsBtn}>{tag}</button>
          ))}
        </div>

        <div className={styles.lefttop}>
          <Calendar size={18} className={styles.IconGlobal}/>
          <p>{date}</p> 
        </div>

        <div className={styles.rightbottom}>
          <ArrowUpRight size={32} className={styles.IconGlobal}/>
        </div>

        <div className={styles.centeredText}>
          <h1 className={styles.description}>
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
