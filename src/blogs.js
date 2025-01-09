import React from 'react';
import './MyArticles.css';

const Blog = ({ title, content }) => {
  const handleMarkAsRead = () => {
    alert('Marked as read');
  };

  return (
    <div className="my-article">
      <div className="article-header">
        <h2>{title || 'Default Title'}</h2>
      </div>
      <div className="article-content">
        <article dangerouslySetInnerHTML={{ __html: content || 'Default content goes here.' }} />
        <div className="progressButton">
          <button onClick={handleMarkAsRead} className="button btn">Mark as done</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
