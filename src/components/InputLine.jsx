import React from 'react';

export default function ScreenDisplay({ numberDisplay }) {
  return (
    <form className='p-2'>
      <input
        type='number'
        value={numberDisplay}
        style={{ outline: 'none' }}
        placeholder='0'
        className='text-right text-6xl px-2 py-1 w-full bg-inherit'
      />
    </form>
  );
}
