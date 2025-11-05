import React from "react";
import { ArrowUpRight, X, KeyRound, Tag, Link } from "lucide-react";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ id, author, width, height, url, download_url, seed }) => {


  const navigate = useNavigate();

  // Zur Single-Post-View navigieren
  const showMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/Posts/${id}`);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Do you want to delete this Post?")) {
      if (window.deletePost) {
        await window.deletePost(id);
      }
    }
  }


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cardParent} onClick={showMore}>
        {/* Background Image */}
        <img 
          src={download_url} 
          alt={`Photo by ${author}`}
          className={styles.image}
        />

        <div className={styles.leftbottom}>
          <Link size={18} className={styles.catIcons}/>
          <div className={styles.UrlContainer}>
          <button className={styles.CategoryBtns}>{url}</button>

          </div>
        </div>

        <div className={styles.righttop}>
          <button className={styles.TagsBtn}>Size: {width} x {height}</button>
        </div>

        <div className={styles.lefttop}>
          <KeyRound size={18} className={styles.IconGlobal}/>
          <p>Id: {id}</p> 
        </div>

        <div className={styles.rightbottom}>
          <div className={styles.deleteIcon}
          onClick={handleDelete}
          aria-label="Delete Post"
          >
            <X size={32} className={styles.IconGlobal} />
          </div>
          <div onClick={showMore}>
            <ArrowUpRight size={32} className={styles.IconGlobal}/>
          </div>
        </div>


        <div className={styles.centeredText}>
          <h1 className={styles.description}>
            {author}
          </h1>
        </div>


      </div>
    </div>
  );
};

export default Card;
