import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
// import { getPosts } from "../api/api";
import galleryReducer from "./Reducer";

const GalleryPosterContext = createContext(null);

// --------------- Context -----------------------
export const useGalleryPoster = () => {
  const context = useContext(GalleryPosterContext);
  if (!context) {
    throw new Error("useGalleryPoster must be used within a GalleryProvider");
  }
  return context;
};

const INITIAL_STATE = {
  posts: [],
  postId: "",
  author: "",
  width: 1,
  height: 1,
  url: "",
  download_url: "",
  page: 1,
  searchTerm: "",
  error: null,
  openUi: false,
};

export const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryReducer, INITIAL_STATE);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


/* --------------------- Api Call (Derzeit nicht Dynamisch) --------------------- */
//  Load portfolio data
//  useEffect(() => {
//   const loadApiData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch('https://picsum.photos/v2/list?page=1&limit=30');
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.error('Error loading portfolio data:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   loadApiData();
// }, []);
/* --------------------- --------------------- */
  const toggleAddPostModal = () => {
    dispatch({
      type: "TOGGLE_ADD_POST_MODAL",
      payload: !state.openUi,
    });
  };


  // fürs filter damit er arbeiten kann
  const filterByImgSeed = (userId) => {
    dispatch({ type: "SET_USER_FILTER", payload: userId });
  };


  const handleSearch = (e) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
  };

  /* --------------------- Search Filter --------------------- */
  let filteredData;

  if (state.searchTerm) {
    const search = state.searchTerm.toLowerCase();
    filteredData = data.filter(item => {
      if (item.author) {
        return item.author.toLowerCase().includes(search);
      } else {
        return false;
      }
    });
  } else {
    filteredData = data;
  }
  
  /* --------------------- Search Filter --------------------- */

  const posterValue = {
    posts: state.posts,
    toggleAddPostModal,
    data: filteredData,
    isLoading,
    handleSearch,
    filterByImgSeed,
    searchTerm: state.searchTerm,
    setData
  };

  return (
    <GalleryPosterContext.Provider value={posterValue}>
      {children}
    </GalleryPosterContext.Provider>
  );
};