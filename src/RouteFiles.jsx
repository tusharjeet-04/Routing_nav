import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import UserDetails from "./Components/UserDetails";
import Navbar from './Components/Navbar';
import Card from './Components/Card';

const RouterFiles = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="userName/:id" element={<UserDetails/>} />
          <Route path="userName/:id/Card" element={<Card/>} />
        </Routes>
      </Router>
    </>
)
}

export default RouterFiles