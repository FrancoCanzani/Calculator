import React from 'react';

export default function CButton({ handleClear }) {
  return (
    <button
      onClick={handleClear}
      className='rounded-md bg-red-600 px-4 py-1 text-xl font-bold text-white active:translate-y-1'
    >
      C
    </button>
  );
}
