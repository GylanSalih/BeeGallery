import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import HamburgerMenu from "./hamburger-menu/HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.headerWrapper}>
      {isMenuOpen && <HamburgerMenu closeMenu={closeMenu} />}

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoLink}>
            <img src="/BeeLogo.png" alt="Bee Gallery Logo" className={styles.logo} />
          </Link>

          <nav className={styles.navLinks}>
            <Link to="/gallery" className={styles.navLink}>Gallery</Link>
            <Link to="/Posts/:postId" className={styles.navLink}>Posts Single View</Link>
            <Link to="/editpost/:postId" className={styles.navLink}>Edit Post</Link>
            <Link to="/AddNewPost" className={styles.navLink}>Add New Post</Link>
          </nav>

          <div className={styles.mobileMenu}>
            <Menu size={24} className={styles.menuIcon} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;