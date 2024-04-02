import './App.css';
import React from 'react';

import NavBar from './Components/Other/NavBar/NavBar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Recent from './Components/Pages/Recent';
import Waitlist from './Components/Pages/Waitlist/Waitlist';
import Projects from './Components/Pages/Projects/Projects';
import Music from './Components/Pages/Projects/Music';
import Writing from './Components/Pages/Projects/Writing';
import WebDesign from './Components/Pages/Projects/WebDesign';
import Building from './Components/Pages/Projects/Building';
import Art from './Components/Pages/Projects/Art';
import Footer from './Components/Other/Footer/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/recent' exact element={<Recent />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/music' exact element={<Music />} />
        <Route path='/art' exact element={<Art />} />
        <Route path='/writing' exact element={<Writing />} />
        <Route path='/webdesign' exact element={<WebDesign />} />
        <Route path='/building' exact element={<Building />} />
        <Route path='/waitlist' exact element={<Waitlist />} />
      </Routes>
    </Router>
  );
}

export default App;
