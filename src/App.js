
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
// import Enter from './Enter.tsx';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Enter />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
