import React from 'react';

export default function UtilityButtons({ event, text }) {
  return (
    <button
      onClick={event}
      className='mr-1 flex h-9 w-14 items-center justify-center rounded-md bg-red-600 px-4 py-1 text-xl font-bold text-white active:translate-y-1'
    >
      {text}
    </button>
  );
}
