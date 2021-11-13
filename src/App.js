import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import Save from './pages/save/Save';
import Gallery from './pages/gallery/Gallery';


function App() {
  return (
    <div>
      <Navbar userName="user_1709"/>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/save" element={<Save/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
