import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './containers/home/Home'
import Crewa from './containers/crew/Crewa'

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Crewa" exact element={<Crewa />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
