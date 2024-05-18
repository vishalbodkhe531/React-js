import React from "react";
// import Cart from './components/Cart';
// import { Products } from './data';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddToCart from "./pages/ProductDetails";
// import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-detail" element={<AddToCart />} />
      </Routes>
    </Router>
  );
}

export default App;
