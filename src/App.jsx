import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styling
import "./App.scss";
import "./fonts/fonts.css"

// Context Provider
import { GalleryProvider } from "./context/Context.jsx";

// Components import
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

// Import von Pages
// import Home from "./pages/home/Home.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import SinglePostView from "./pages/single-post-view/SinglePostView.jsx"
import EditPost from "./pages/edit-post/EditPost.jsx";
import AddNewPost from "./pages/add-new-post/AddNewPost.jsx";

export default function App() {
  return (
    <GalleryProvider>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/gallery" element={<Gallery />} />
            
            <Route path="/AddNewPost" element={<AddNewPost />} />
            <Route path="/editpost/:postId" element={<EditPost />} />
            <Route path="/Posts/:postId" element={<SinglePostView />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GalleryProvider>
  );
}
