import React from 'react';
import './MyHeader.css';
import myLogo from './myLogo.png'

const MyHeader = () => {
  return (
    <div className="analysis-tool">
      <header className="header">
        <div className="logo">
          <img src={myLogo} alt={'logo'} width={'50px'} style={{borderRadius:'50%', marginRight:'1.1em'}} />
          BINARY TOOL
        </div>
        <div className="menu">
          <span className="menu-item">My courses</span>
          <span className="menu-item">Search</span>
        </div>
      </header>
    </div>
  );
};

export default MyHeader;
