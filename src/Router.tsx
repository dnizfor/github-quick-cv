import React from 'react';
import logo from './logo.svg';
import './Router.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import User from './pages/User/User';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<User />} />
      </Routes>
      
    </div>
  );
}

export default App;
