import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import MyExercise from './Components/Exercise/MyExercise';
import Assignment from './Components/Assignment/Assignment';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Assignment />
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyExercise />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
