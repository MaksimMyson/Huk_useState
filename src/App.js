import React, { useState, useEffect } from 'react';
import Lorem from './components/Lorem';
import ManagerButton from './components/ManagerButton';
import './styles/App.css';

const App = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  
  useEffect(() => {
    console.log(`Quote visibility changed: ${isQuoteVisible}`);
  }, [isQuoteVisible]);

  const toggleQuote = () => {
    setIsQuoteVisible((prev) => !prev);
  };

  const quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="app-container">
      <ManagerButton toggleQuote={toggleQuote} isQuoteVisible={isQuoteVisible} />
      {isQuoteVisible && <Lorem quote={quote} />}
    </div>
  );
};

export default App;
