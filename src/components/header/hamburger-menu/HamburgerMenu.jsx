import React, { useState, useEffect } from 'react';
import styles from "./Hamburger.module.scss";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";

export default function HamburgerMenu({ closeMenu }) {


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.ParentContainer}>
      

      <X size={34} className={styles.CloseIcon} onClick={closeMenu} />

      <div className={styles.navLinksMobile}>
        <Link to="/page1" className={styles.link} onClick={closeMenu}>
          Gallery
        </Link>
        <Link to="/page2" className={styles.link} onClick={closeMenu}>
          About
        </Link>
      </div>

      <div className={styles.socialMedia}>
          <Instagram size={24} className={styles.socialMediaIcon} />
          <Twitter size={24} className={styles.socialMediaIcon} />
          <Facebook size={24} className={styles.socialMediaIcon} />
          <Youtube size={24} className={styles.socialMediaIcon} />
        </div>
    

      </div>
    </div>
  );
}