import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import './style.css';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);