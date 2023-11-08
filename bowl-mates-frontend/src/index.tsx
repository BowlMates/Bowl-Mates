// React Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// Custom Imports
import './index.css'
import FrontendTest from './tests/FrontendTest'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <FrontendTest/>
      </BrowserRouter>
  </React.StrictMode>
)
