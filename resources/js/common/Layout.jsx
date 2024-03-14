import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';


function Layout() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/about" exact element={<About/>} />
        <Route path="/portfolio" exact element={<Portfolio/>} />
        <Route path="/services"  element={<Service />} />
        <Route path='/service/:slug' exact element={<SubService/>} />
        <Route path="/contact"  element={<Contact />} /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;

