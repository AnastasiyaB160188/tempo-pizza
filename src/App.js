import React from "react";
import {Header} from './components';
import {Routes, Route} from 'react-router-dom';
import {Home,Cart} from './pages';

export default function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
    </div>
  );
}