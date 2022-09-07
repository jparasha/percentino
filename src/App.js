import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WhatPercent, WhatIs } from './components';

function App() {

  const CONSTANT = {
    WHAT_PERCENT : 'whatPercent',
    WHAT_IS : 'whatIs',
  }
  
  const types = [{
    label : 'what percent of x is y',
    value : CONSTANT.WHAT_PERCENT
  },
  {
    label : 'what is x% of y',
    value : CONSTANT.WHAT_IS
  },
];

  const[selected, setSelected] = useState(CONSTANT.WHAT_PERCENT);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <section className='calc-section flex'>
          <select value={selected} onChange={(e) => setSelected(e.target.value)}>
            {
              types.map(type=><option value={type.value}>{type.label}</option>)
            }
          </select>
          {<WhatPercent show={selected === CONSTANT.WHAT_PERCENT }/>}
          {<WhatIs show ={selected === CONSTANT.WHAT_IS }/>}
        </section>
      </header>
    </div>
  );
}

export default App;
