import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ReactFlowProvider } from 'react-flow-renderer';
import './index.css'
import Navbar from './Components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='main-css'>
     {/* <Navbar/> */}

    <App/>
 
   </div>
)
