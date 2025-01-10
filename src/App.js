import React, { useState } from 'react';
import LandingPage from './home';
import './App.css';
import MyHeader from './customHeader';
import MyFooter from './Footer';
import MainBody from './MainBody';
import FloatingButtons from './FloatingButtons';
import CourseDashboard from './CourseDashboard';
import More from './More';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleStartLearning = () => {
    setShowLandingPage(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {showLandingPage ? (<LandingPage onStartLearning={handleStartLearning} />):
      (
        <><div className="socials">
            <div className="appSocials"></div>
            <div className="appSocials"></div>
            <div className="appSocials"></div>
          </div><MyHeader />
      
      {/* Pass handleOpenModal to FloatingButtons */}
      <FloatingButtons onCourseClick={handleOpenModal} />
      <More/>
      
      <MainBody />
      <MyFooter />

      {/* Render CourseDashboard as a modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '80%',
              maxWidth: '600px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CourseDashboard />
            <button
              onClick={handleCloseModal}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#6200EA',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}</>
      )}
      
    </div>
  );
}

export default App;
