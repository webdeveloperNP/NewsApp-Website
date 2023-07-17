import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
    <Router>
    <div className="container my-3">
      Hello Ji
      <Navbar title='TextUtils' about='About Us'/>

      <Routes>
      <Route exact path="/" element={<Textform heading='Enter text here'/>}/>  
      <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
