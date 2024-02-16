import React from 'react';
import PageHeader from '../PageHeader/PageHeader'
import './blog.css'
import Button from '../Button/Button';

const Blog = () => {
  return (
    <div className='main'>
      <PageHeader
        title="Blog"
        paragraph="This is a paragraph of text specific to the Blog Page."
        className="home-image" />
      <div className="blog">
        <div className="blog-details">
          <h3>Name Of Blog</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae at libero molestiae fuga consequuntur.</p>
          <Button />
        </div>
      </div>
    </div>

  );
}

export default Blog;
