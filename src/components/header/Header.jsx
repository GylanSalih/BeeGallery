import React, { useState } from "react";
import { X, Menu, AudioLines, Search } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

// import Components
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpener = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.simpleWrapper}>
      {/* show add new post component */}
      {isOpen && <HamburgerMenu closeMenu={closeMenu} />}

      <div className={styles.header}>
        <Link to="/" className={styles.headerlink}>
          <img src="/BeeLogo.png" alt="logo" className={styles.logo} />
        </Link>

        <div className={styles.navLinksPcOnly}>
          <Link to="/page1" className={styles.link}>
            Page 1
          </Link>
          <Link to="/page2" className={styles.link}>
            Page 2
          </Link>
        </div>

        <div className={styles.MobileIconsOnly}>
          <AudioLines size={24} className={styles.IconHeader} />
          <Search size={24} className={styles.IconHeader} />
          <Menu
            size={24}
            className={styles.IconHeader}
            onClick={handleMenuOpener}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
