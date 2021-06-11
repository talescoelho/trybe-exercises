import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import Pages from './components/Pages';
import Navbar from './components/Navbar';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import "./App.css"

function handleClick(mode) {
  // console.log(mode)
  if (mode) {
    document.getElementById('root').parentNode.className = "dark";
  } else {
    document.getElementById('root').parentNode.className = "";
  }
}

function App() {
  const [state, setstate] = useState(0);
  
  if (!state) {
    handleClick(true)
  } else {
    handleClick(false)
  }
  
  return (
    <div className="body-container">
      <div className="main-content">
        <div className="left">
          <BrowserRouter>
            <Navbar />
            <Pages />
          </BrowserRouter>
        </div>
        <div className="right">
          <FaRegMoon className="mode" display={!state && "none"} size="2em" onClick={ () => setstate(0) } />
          <FiSun className="mode" display={state && "none"} size="2em" onClick={ () => setstate(1) } />
        </div>
      </div>
    </div>
  );
}

export default App;
