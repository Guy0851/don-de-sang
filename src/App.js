import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import MySpace from './pages/MySpasce';
import {useState} from 'react';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/myspace' element={<MySpace/>} />
      </Routes>
    </div>
  );
}

export default App;
