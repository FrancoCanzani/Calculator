import React from 'react';

export default function NumberButton({ num }) {
  return (
    <button className='mb-2 mr-2 rounded-md bg-slate-600 px-6 py-2 text-5xl text-white'>
      {num}
    </button>
  );
}
