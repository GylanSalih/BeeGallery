import React, { useState, useEffect } from "react";
import { X, Menu, AudioLines, Search, Plus, Trash2, Eye, Filter, ChevronDown } from "lucide-react";

// import Styles
import styles from "./Filterbar.module.scss";
// const [search, setIsSearch] = useState("");

// const changeHandler = (e) => {
//     e.preventDefault();
//     setIsSearch(e.target.value);
// }

// Stackoverflow dropdown
export default function Filterbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = [
    "All",
    "Design",
    "Development", 
    "Photography",
    "Art",
    "UI/UX",
    "Branding"
  ];

  return (
    <div className={styles.filterbarContainer}>
      {/* Filters Section */}
      <div className={styles.filtersSection}>
        <p className={styles.filtersLabel}>Filters</p>
        
        <div className={styles.filtersRow}>
          {/* Search Form */}
          <form className={styles.searchContainer}>
            <Search size={20} className={styles.searchIcon} />
            <input type="search" placeholder="Search your Items" name="searchbar" />
            <button type="submit" className={styles.submitBtn}>Search</button>
          </form>

          {/* Filter Dropdown */}
          <div className={styles.dropdownContainer}>
            <button 
              className={styles.dropdownButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Filter size={16} />
              {selectedFilter}
              <ChevronDown size={16} />
            </button>
            
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    className={`${styles.dropdownItem} ${selectedFilter === option ? styles.active : ''}`}
                    onClick={() => {
                      setSelectedFilter(option);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className={styles.BtnContainer}>
            <button className={styles.FilterBtns}>
              <Plus size={16} />
              Add Item
            </button>
            <button className={styles.FilterBtns}>
              <Trash2 size={16} />
              Delete
            </button>
            <button className={styles.FilterBtns}>
              <Eye size={16} />
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
