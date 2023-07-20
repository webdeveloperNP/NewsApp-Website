import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route, Outlet, Link, Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News pageSize={10} country='us' category='general'/>}>
          <Route index element={<News pageSize={10} country='us' category='general'/>} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="business" element={<News pageSize={10} country='us' category='business'/>} />
          <Route path="entertainmet" element={<News pageSize={10} country='us' category='entertainmet'/>} />
          <Route path="health" element={<News pageSize={10} country='us' category='health'/>} />
          <Route path="science" element={<News pageSize={10} country='us' category='science'/>} />
          <Route path="sports" element={<News pageSize={10} country='us' category='sports'/>} />
          <Route path="technology" element={<News pageSize={10} country='us' category='techno'/>} />
          <Route path="contact" element={<News pageSize={10} country='us' category='business'/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
        
        
        </Router>
      </div>
    )
  }
}


export default App;
