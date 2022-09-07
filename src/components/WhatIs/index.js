import { useState } from 'react';

export default function WhatIs({ show }) {
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(0);

  const result = Number((((initial || 0) / 100) * (final || 0)).toFixed(2));
  const total = final + result;

  const onInitialChange = (event) => {
    const { target } = event || {};
    setInitial(+target?.value);
  };

  const onFinalChange = (event) => {
    const { target } = event || {};
    setFinal(+target?.value);
  };

  return (
    show && (
      <div className='what-is flex'>
        <span>what is </span>
        <input
          placeholder=''
          type={'number'}
          value={initial || ''}
          onChange={onInitialChange}
        />
        <span> percent of </span>
        <input
          placeholder=''
          type={'number'}
          value={final || ''}
          onChange={onFinalChange}
        />
        {final && initial && (
          <div>
            <span>{result || ''} &nbsp;</span>
            <span>(Total </span>
            <span className={+result > 0 ? 'text-green' : 'text-red'}>
              {`${Number(total).toFixed(2)})`}
            </span>
          </div>
        )}
      </div>
    )
  );
}
