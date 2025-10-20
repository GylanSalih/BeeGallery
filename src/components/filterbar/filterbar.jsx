import React, { useState, useEffect } from "react";
import { X, Menu, AudioLines, Search } from "lucide-react";

// import Styles
import styles from "./Filterbar.module.scss";
// const [search, setIsSearch] = useState("");

// const changeHandler = (e) => {
//     e.preventDefault();
//     setIsSearch(e.target.value);
// }

export default function Filterbar() {
  return (
    <div className="app">
      <h1>Filterbar</h1>

      {/* value={value} onChange={() => changeHandler(e)} */}
      <form className={styles.searchContainer}>
        <Search size={24} className={styles.searchIcon} />
        <input type="search" placeholder="Search your Items" name="searchbar" />
        <button type="submit" className={styles.submitBtn}>Search</button>
      </form>

      <div className={styles.ParentContainer}>
        <div className={styles.BtnContainer}>
          <p>Filters</p>
          <button className={styles.FilterBtns}>Add More</button>
          <button className={styles.FilterBtns}>Delete</button>
          <button className={styles.FilterBtns}>View Project</button>
          <button className={styles.FilterBtns}>View Project</button>
        </div>
      </div>

      {/* ist eine Auflistung mit zahlen 1.xx 2.yy 3.zzz */}
      {/* <ol className={styles.ol}>
        <li className={styles.li}>
            hey
        </li>
      </ol> */}
    </div>
  );
}
