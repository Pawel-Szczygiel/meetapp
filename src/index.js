import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import FavoritesContext from './store/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode >
      <FavoritesContext>
        <Router>
          <App />
        </Router>
      </FavoritesContext>
    </StrictMode>
);
