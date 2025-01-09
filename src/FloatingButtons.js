import React, { useState, useEffect } from 'react';
import './FloatingButtons.css'; // CSS styles for the buttons

const FloatingButtons = ({ onCourseClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 0); // Show buttons only when scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`floating-buttons ${isVisible ? 'visible' : ''}`}>
      {/* <button className="floating-button">Side <br />Bar</button> */}
      <button className="floating-button" onClick={onCourseClick}>
        Course
      </button>
    </div>
  );
};

export default FloatingButtons;
