import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Main/Content/Content';
import Courses from './components/Сourses/Сourses';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;