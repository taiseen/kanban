import { BoardCardItem } from './context/BoardCardContext';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BoardCardItem>
      <App />
    </BoardCardItem>
  </React.StrictMode>
);
