import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Otras partes de tu aplicación */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route exact path="Contact"element={<Contact />} />
        <Route path="/" element={<InitialRedirect />} />
        
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

function InitialRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/Home');
  }, [navigate]);

  return null;
}


export default App;
