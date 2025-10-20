import React from 'react';
import styles from './Card.module.scss';
// import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';


// import { useReducer } from "react";
// import reducerProvider from "../../context/ReducerProvider.jsx";

const Cards = ({ title, description, postId }) => {
  // const navigate = useNavigate();
  // const { deletePost } = usePoster();

  // // const [state, dispatch] = useReducer(reducerProvider, initialState);

  // Format the date
  const dateShower = () => {
    return new Date().toLocaleDateString("de-DE", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  }

  // const showMore = (e) => {
  //   e.preventDefault();
  //   navigate(`/posts/${postId}`);
  // }

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (window.confirm("Do you want to delete this post?")) {
  //     deletePost(postId);
  //   }
  // }

  return (
    
    <div className={styles.card}>
      <figure className={styles.figure}>
        <img 
          src="/images/DarkDefault.png" 
          alt={title}
          className={styles.image} 
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p className={styles.date}>{dateShower()}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <div className={styles.linkIcon}>
            <ArrowUpRight size={20} />
          </div>
          <button 
            className={styles.deleteIcon}
            aria-label="Delete post"
          >
            <X size={18} />
          </button>
            
        </div>
      </figure>
    </div>
  );
};

export default Cards;

