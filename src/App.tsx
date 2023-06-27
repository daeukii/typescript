import React from 'react';
import logo from './logo.svg';
import './App.css';
import Daeuk from '../src/Components/Daeuk'

function App() {

  return (
    <div className="App">
    <Daeuk initialValue={20}/>
    </div>
  );
}

export default App;
