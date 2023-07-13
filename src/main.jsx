import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import { Gifts } from './components.jsx'
import './index.css'


const giftsDomNode = document.getElementById('gifts');
const root = createRoot(giftsDomNode);
root.render(<Gifts />);