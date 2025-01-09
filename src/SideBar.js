import React from 'react';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="progress-bar">
        <p>Your progress 0%</p>
        <div className="progress-bar-indicator">
        </div>
      </div>
      <div className="table-of-contents">
        <h2>Table of contents</h2>
        <a href="#" className="expand-all-link">Expand all</a>
        <div className="rating-box">
          <div className="star-rating">
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star"></span>
              <span className="star-empty"></span>

          </div>
          <p>4.56 average based on 16 ratings</p>
          <p className="more-link">(more)</p>
          <a href="#" className="review-link">Write a review</a>
        </div>
      </div>
      <div className="administration">
        <h2>Administration</h2>
        <div className="admin-items">
          <label>
            <input type="checkbox" /> Course administration
          </label>
          <label>
            <input type="checkbox" /> Unenrol me from this course
          </label>
        </div>
      </div>
    </aside>
  );
};


export default Sidebar;