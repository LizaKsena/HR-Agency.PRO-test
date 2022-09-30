import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/main';
import OneArticle from './components/article/oneArticle';

function App() {
  return (
    <div className="App">
      <h2>NEWS</h2>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<OneArticle />} />
      </Routes>
    </div>
  );
}

export default App;
