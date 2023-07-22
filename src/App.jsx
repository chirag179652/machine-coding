import React, { useState } from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search/searchData';
import Home from './components/Home/Home';
import { createContext } from 'react';
import { ThemeContext } from './Hooks/themeContext';

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
