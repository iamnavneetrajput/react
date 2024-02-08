import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Blog from './components/Blog/Blog';
import Course from './components/Courses/Course';
import Subscription from './components/Subscription/Subscription';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <>
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
};

export default App;
