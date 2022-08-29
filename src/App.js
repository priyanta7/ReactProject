import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import Weather from './app_component/weather.component.jsx'


function App() {
  return (
    <div className='App'>
      <Weather />
    </div>
  )
}

export default App;
