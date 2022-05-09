import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Video from './components/Video';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path='/video/:id' element={<Video />} />
    <Route path='*' element={<App/>}/>
  </Routes>
  </BrowserRouter>
);

