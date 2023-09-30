import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './desta.css'

const Desta = () => {
  return (
    <div className='desta section__padding'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Desta />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default Desta