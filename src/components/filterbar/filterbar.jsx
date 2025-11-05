import React, { useState, useEffect, useRef } from "react";
import { Search, Plus, Filter, ChevronDown } from "lucide-react";
import styles from "./Filterbar.module.scss";
import { useGalleryPoster } from "../../context/Context";
import { deletePostById } from "../../api/api";

export default function Filterbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const dropdownRef = useRef(null);

  const { searchTerm, handleSearch, data, setData } = useGalleryPoster();

  // Delete Funktion
  const deletePost = async (id) => {
    try {
      await deletePostById(id);
    } catch (error) {
      console.warn("API delete error:", error.message);
    }

    // Immer lokal löschen
    setData((prevData) => prevData.filter((post) => post.id !== id));
    console.log("Post deleted successfully");
  };

  // Für Card zugänglich machen
  window.deletePost = deletePost;

  const filterOptions = [
    "All",
    "Design",
    "Development",
    "Photography",
    "Art",
    "UI/UX",
    "Branding",
  ];

  // Dropdown schließen, wenn man außerhalb klickt oder ESC drückt - Stackoverflow
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isDropdownOpen]);

  // Suchfeld zurücksetzen
  function resetSearch() {
    handleSearch({ target: { value: "" } });
  }

  // Dropdown-Auswahl
  function handleSelectFilter(option) {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
  }

  return (
    <div className={styles.filterbarContainer}>
      <div className={styles.filtersSection}>
        <p className={styles.filtersLabel}>Filters</p>

        <div className={styles.filtersRow}>
          {/*  Suchfeld */}
          <form className={styles.searchContainer}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search your items"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              type="reset"
              onClick={resetSearch}
              className={styles.clearButton}
            >
              Clear All
            </button>
          </form>

          {/* Filter Dropdown */}
          <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button
              type="button"
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
                    type="button"
                    className={`${styles.dropdownItem} ${
                      selectedFilter === option ? styles.active : ""
                    }`}
                    onClick={() => handleSelectFilter(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add Button */}
          <div className={styles.BtnContainer}>
            <button className={styles.FilterBtns}>
              <Plus size={16} />
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
