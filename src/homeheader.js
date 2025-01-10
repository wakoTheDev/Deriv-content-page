import React from 'react';
import './MyHeader4.css';
import myLogo from './myLogo.png'

const MyHeader = () => {
  const handleClick = () =>{
    window.location.href = 'https://track.deriv.com/_7p0wsCpjOfD1hit6RV3zsGNd7ZgqdRLk/1/'
  }
  return (
    <div className="analysis-tool">
      <header className="header">
        <div className="logo">
          <img src={myLogo} alt={'logo'} width={'50px'} style={{borderRadius:'50%', marginRight:'1.1em'}} />
          BINARY TOOL
        </div>
        <div className="menu">
          <span className="menu-item" onClick={handleClick}>Sign Up </span>
        </div>
      </header>
    </div>
  );
};

export default MyHeader;
