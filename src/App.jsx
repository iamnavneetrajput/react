import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import User from './components/User/User'
import Blog from './components/Blog/Blog';
import Course from './components/Courses/Course';
import Subscription from './components/Subscription/Subscription';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Submenu from './components/Sub-menu/Submenu';
import dayModeSound from './system-sound/daytoggle.mp3';
import nightModeSound from './system-sound/nighttoggle.mp3'
const App = () => {
  const [isNightMode, setIsNightMode] = useLocalStorage(false);

  const toggleNightMode = () => {
    setIsNightMode(prevMode => !prevMode);
    playModeSound(!isNightMode);
  };

  const playModeSound = (isDayMode) => {
    const audio = new Audio(isDayMode ? nightModeSound : dayModeSound);
    audio.play();
  };
  return (
    <>
   
      <div className={isNightMode ? 'app-container night-mode' : 'app-container'}>
        <Navbar />
        <Submenu
        isNightMode={isNightMode} onToggle={toggleNightMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
        <Footer />
      </div>
     
    </>
  );
};

export default App;
