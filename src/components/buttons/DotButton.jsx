import React from 'react';

export default function DotButton({ num, handleConcat }) {
  return (
    <button
      className='m-auto mb-3 h-16 w-16 rounded-md bg-slate-600 px-5 text-5xl text-white hover:bg-slate-500 active:translate-y-1'
      onClick={() => handleConcat(num)}
    >
      {num}
    </button>
  );
}
