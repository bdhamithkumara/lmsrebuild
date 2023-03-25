import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bulma/css/bulma.css";
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>
);




