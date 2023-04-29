import React from 'react';

export default function OperationButton({ operation }) {
  return (
    <button className='mb-2 mr-2 h-16 w-16 rounded-md bg-slate-700 px-6 py-2 text-5xl text-white'>
      {operation}
    </button>
  );
}
