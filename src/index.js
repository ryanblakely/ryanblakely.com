import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Projects, About, Post } from './pages';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path=':postId' element={<Post />}></Route>
            <Route path='/' element={<Navigate replace to='/' />}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
