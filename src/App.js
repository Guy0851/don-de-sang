import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import MySpace from './pages/MySpace';
import Patient from './pages/Patient';
import Medecin from './pages/Medecin';

// import {useState} from 'react';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/myspace' element={<MySpace/>} />
        <Route path='/patient' element={<Patient/>}/>
        <Route path='/medecin' element={<Medecin/>}/>
      </Routes>
    </div>
  );
}

export default App;
