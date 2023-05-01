import React from 'react';

export default function CeButton({ handleResetValue }) {
  return (
    <button
      onClick={handleResetValue}
      className='mx-2 rounded-md bg-red-600 px-4 py-1 text-xl font-bold text-white active:translate-y-1'
    >
      Ce
    </button>
  );
}
