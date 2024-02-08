import React from 'react';
import { Course } from '../../pages/Data';
import './blog.css'

const Blog = () => {
  return (
    <div className='main'>
      <div className="blog">
        <div className="blog-details">
        <h3>Name Of Blog</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae at libero molestiae fuga consequuntur.</p>
        <button>Read More</button>
        </div>

        <div className="blog-details">
        <h3>Name Of Blog</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae at libero molestiae fuga consequuntur.</p>
        <button>Read More</button>
        </div>
        <div className="blog-details">
        <h3>Name Of Blog</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae at libero molestiae fuga consequuntur.</p>
        <button>Read More</button>
        </div>
      </div>
      </div>
      
  );
}

export default Blog;
