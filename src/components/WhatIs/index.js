import { useState } from 'react';

export default function WhatIs({show}) {
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
    show && (<div className='what-is flex'>
      <span>what is </span>
      <input
        placeholder=''
        type={'number'}
        value={initial}
        onChange={onInitialChange}
      />
      <span> percent of </span>
      <input
        placeholder=''
        type={'number'}
        value={final}
        onChange={onFinalChange}
      />
      <span>
        {' '}
        {final &&
          initial &&
          `${((((initial || 0) / 100) * (final || 0)) + 100).toFixed(2) || ''}`}
      </span>
    </div>)
  );
}
