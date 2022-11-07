import React from 'react';
import { Rotas } from './Components/Routes';
import { Data } from './Context/data';



function App() {
  return (
    <Data>
      <Rotas />
    </Data>
  );
}

export default App;
