import React from 'react';
import './App.css';
import BForm from './components/Form.js';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Booking Form</h1>
      </header>
      <div className="layout">
        <BForm />
      </div>
      <img className="image" src={require('./components/logo.png')} alt=""/>
    </div>
  );
}

export default App;
