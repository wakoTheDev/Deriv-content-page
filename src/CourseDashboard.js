import React from 'react';
import './App.css';

const CourseDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Course dashboard: The Analysis Tool</h2>
            </div>

            <div className="dashboard-content">
                <div className="course-info">
                    <img src="/path/to/image.png" alt="The Analysis Tool" className="course-image" />
                    <div className="course-description">
                        <h3>The Analysis Tool</h3>
                        <p>Our Analysis Tool is designed to empower traders with advanced insights and data-driven decisions. It features a comprehensive suite of analytical capabilities, including real-time...</p>
                    </div>
                </div>

                <div className="course-actions">
                    <div className="activities">
                        <button className="activity-button">Activities</button>
                    </div>
                    <div className="teacher-info">
                        <div className="teacher-avatar">D</div>
                        <p><strong>Teacher:</strong> Daniel</p>
                    </div>
                </div>

                <div className="dashboard-buttons">
                    <button className="grades-button">Grades</button>
                    <button className="badges-button">Badges</button>
                    <button className="competencies-button">Competencies</button>
                </div>
            </div>

            <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}>0%</div>
            </div>
        </div>
    );
};

export default CourseDashboard;
