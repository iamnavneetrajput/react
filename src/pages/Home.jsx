import React from 'react';
import './page.css';
import Card from './Card';
import Cateogories from '../components/Categories/Categories';
import PageHeader from '../components/PageHeader/PageHeader';
import Newsletter from '../components/News-letter/Newsletter';
const Home = () => {
  return (
    <>
      <div className='main'>
        <PageHeader
          title="Welcome to Home"
          paragraph="This is a paragraph of text specific to the Home Page."
          buttonText="Explore Courses"
          buttonLink="/course"
          className="home-image"
        />
        <Card />
        <Cateogories />
        <Newsletter/>
      </div>
    </>
  );
};

export default Home;
