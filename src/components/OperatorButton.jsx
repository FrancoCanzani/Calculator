import React from 'react';

export default function OperatorButton({ operator, handleOperator }) {
  return (
    <button
      className='m-auto mb-3  flex h-16 w-16 items-center justify-center rounded-md bg-slate-700 px-5 text-5xl text-white hover:bg-slate-500 active:translate-y-1'
      onClick={() => handleOperator(operator)}
    >
      {operator}
    </button>
  );
}
