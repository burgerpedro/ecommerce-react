import React from 'react';
import { Rotas } from './Components/Routes';
import { Data } from './Context/data';
import './App.css'


function App() {
  return (
    <Data>
      <Rotas />
    </Data>
  );
}

export default App;
