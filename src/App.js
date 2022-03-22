
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './index.css';
import './project.css';

import Home from "./Home.js"
import Project from './Project.js';
import Header from './Header.js';



function App() {
  return(
    <Router>
      <Header />
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes >
    </Router>
   
  )
  
}
export default App