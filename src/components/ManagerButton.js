import React from 'react';
import '../styles/ManagerButton.css'; 


const ManagerButton = ({ toggleQuote, isQuoteVisible }) => {
  return (
    <button className="toggle-button" onClick={toggleQuote}>
      {isQuoteVisible ? 'Hide Quote' : 'Show Quote'}
    </button>
  );
};

export default ManagerButton;
