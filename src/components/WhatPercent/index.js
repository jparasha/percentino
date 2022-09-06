import { useState } from 'react';

export default function WhatPercent() {
  const [initial, setInitial] = useState('');
  const [final, setFinal] = useState('');

  const onInitialChange = (event) => {
    const { target } = event || {};
    setInitial(target?.value);
  };

  const onFinalChange = (event) => {
    const { target } = event || {};
    setFinal(target?.value);
  };

  return (
    <div className='what-percent flex'>
      <span>what % of </span>
      <input placeholder=''type={'number'} value={initial} onChange={onInitialChange} />
      <span> is </span>
      <input placeholder=''type={'number'} value={final} onChange={onFinalChange} />
      <span> {final && initial && `${(((final*100)/initial)-100).toFixed(2) || ''}`}</span>
    </div>
  );
}
