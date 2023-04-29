import React from 'react';

export default function EqualButton({ handleOperation }) {
  return (
    <button
      onClick={handleOperation}
      className='m-auto mb-3 flex h-16 w-16 items-center justify-center rounded-md bg-purple-700 px-5 text-5xl text-white hover:bg-purple-500 active:translate-y-1'
    >
      =
    </button>
  );
}
