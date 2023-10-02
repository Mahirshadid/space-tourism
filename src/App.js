import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, Footer } from './components/';
import Home from './containers/home/Home'
import Crewa from './containers/crew/Crewa'
import Desta from './containers/destination/Desta';
import { Tech } from './containers';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Desta" exact element={<Desta />} />
            <Route path="/Crewa" exact element={<Crewa />} />
            <Route path="/Tech" exact element={<Tech />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
