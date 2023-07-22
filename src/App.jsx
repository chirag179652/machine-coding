import React from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search/searchData';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
