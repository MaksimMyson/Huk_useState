import React from 'react';
import '../styles/Lorem.css'; 


const Lorem = ({ quote }) => {
  return (
    <div className="lorem-container">
      <p>{quote}</p>
    </div>
  );
};

export default Lorem;
