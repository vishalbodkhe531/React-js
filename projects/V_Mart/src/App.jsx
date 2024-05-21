import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddCart from "./pages/AddCart";
import ProductDetails from "./pages/ProductDetails";
import LikeProjects from "./pages/LikeProjects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-cart" element={<AddCart />} />
        <Route path="/product-info" element={<ProductDetails />} />
        <Route path="/like-cart" element={<LikeProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
