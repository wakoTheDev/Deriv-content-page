import React, { useState, useEffect } from 'react';
import './More.css';

const More= () => {
  const [isVisible, setIsVisible] = useState(false);
  let timeout;

  const handleScroll = () => {
    clearTimeout(timeout);
    setIsVisible(true);

    
    timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };
  
  const handleClick = () =>{
    window.location.href = 'https://track.deriv.com/_7p0wsCpjOfD1hit6RV3zsGNd7ZgqdRLk/1/'
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="more-button" onClick={handleClick}>More</button>
      )}
    </div>
  );
};

export default More;
