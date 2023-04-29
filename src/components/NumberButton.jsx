import React from 'react';

export default function NumberButton({ num }) {
  return (
    <button className='m-1 rounded-md bg-slate-600 p-4 px-7 text-5xl text-white'>
      {num}
    </button>
  );
}
