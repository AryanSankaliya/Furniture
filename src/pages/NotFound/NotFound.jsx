import React, { useEffect, useState   } from 'react';
import { useNavigate } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
      const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="not-found-container">
      <div className={`not-found-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="error-number-container">
          <span className="error-number">4</span>
          <div className="furniture-icon sofa-icon">
            <div className="sofa-cushion"></div>
            <div className="sofa-base"></div>
          </div>
          <span className="error-number">4</span>
        </div>
        
        <h1 className="error-heading">Oops! Page Not Found</h1>
        <p className="error-description">
          The furniture you are looking for might have been moved or is temporarily unavailable.
        </p>
        
        <button className="home-button" onClick={() => navigate("/")}>
          <span className="button-text" >Back to Home</span>
          <div className="button-hover-effect"></div>
        </button>
      </div>
      
      {/* Animated background furniture elements */}
      <div className="floating-furniture">
        <div className="floating-item chair-float">
          <div className="chair-back"></div>
          <div className="chair-seat"></div>
          <div className="chair-legs"></div>
        </div>
        <div className="floating-item table-float">
          <div className="table-top"></div>
          <div className="table-leg"></div>
        </div>
        <div className="floating-item lamp-float">
          <div className="lamp-base"></div>
          <div className="lamp-stem"></div>
          <div className="lamp-shade"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;