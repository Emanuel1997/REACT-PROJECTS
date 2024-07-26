import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeting from './Greeting.jsx'
import FullnameComponent from './Fullname.jsx'
import Animal from './Animal.jsx';
import Appcomponent from './Listitem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appcomponent />
  </React.StrictMode>,
)
