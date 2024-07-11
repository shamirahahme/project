import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; 
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProductCard from './components/productCard'; 
import Shop from './components/shop';
import About from './components/about';
import Login from './components/signUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/productCard" element={<ProductCard />} /> 
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
