import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Router,BrowserRouter } from 'react-router-dom';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
)
