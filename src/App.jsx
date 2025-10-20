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
import Home from "./pages/home/Home.jsx";
import Page1 from "./pages/page1/Page1.jsx"
import Page2 from "./pages/page2/Page2.jsx"

export default function App() {
  return (
    <GalleryProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GalleryProvider>
  );
}
