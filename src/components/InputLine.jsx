import React from 'react';

export default function ScreenDisplay({ numberDisplay }) {
  return (
    <p className='mb-4 w-full rounded-md bg-slate-900 px-2 py-1 text-right text-6xl text-white'>
      {numberDisplay}
    </p>
  );
}
