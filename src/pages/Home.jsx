import React from 'react';
import './page.css';
import Card from './Card';
const Home = () => {
  return (
    <>
      <div className='main'>

        <div className="home">
          <h1>Welcome to Home</h1>
          <p class="typing-animation">This is a paragraph of text that will eventually be replaced with content about the site.</p>
           <button className='Explore'>Explore</button>
        </div>
        <Card />
      </div>
    </>
  );
};

export default Home;
