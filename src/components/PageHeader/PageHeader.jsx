// PageHeader.js
import React from 'react';

const PageHeader = ({ title, paragraph, buttonText, className  }) => {
    return (
        <div className={`home ${className}`}>
            <h1>{title}</h1>
            <p className="typing-animation">{paragraph}</p>
            <button className='Explore'>{buttonText}</button>
        </div>
    );
};

export default PageHeader;
