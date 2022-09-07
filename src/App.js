import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WhatPercent, WhatIs } from './components';

function App() {

  const CONSTANT = {
    WHAT_PERCENT : 'whatPercent',
    WHAT_IS : 'whatIs',
  } 

  const[selected, setSelected] = useState(CONSTANT.WHAT_PERCENT);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <section className='calc-section flex'>
          <select value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option value={CONSTANT.WHAT_PERCENT}>{CONSTANT.WHAT_PERCENT}</option>
            <option value={CONSTANT.WHAT_IS}>{CONSTANT.WHAT_IS}</option>
          </select>
          {<WhatPercent show={selected === CONSTANT.WHAT_PERCENT }/>}
          {<WhatIs show ={selected === CONSTANT.WHAT_IS }/>}
        </section>
      </header>
    </div>
  );
}

export default App;
