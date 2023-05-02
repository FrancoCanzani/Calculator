import React, { useRef, useEffect } from 'react';

export default function ScreenDisplay({ numberDisplay, operation }) {
  const pRef = useRef(null);

  // Have the line to scroll right when the number is long and overflows the width
  useEffect(() => {
    const p = pRef.current;
    p.scrollLeft = p.scrollWidth - p.clientWidth;
  }, [numberDisplay]);

  let displayValue = '';
  if (numberDisplay) {
    const decimalIndex = numberDisplay.indexOf('.');
    if (decimalIndex === -1 || decimalIndex < 8) {
      // display entire number if it has less than 8 digits or contains a decimal point
      displayValue = numberDisplay.substring(0, 9);
    } else {
      // truncate to 8 digits if it has more than 8 digits
      displayValue = numberDisplay.slice(0, 9);
    }
  }

  return (
    <div className='mb-3 h-24 w-full'>
      <div className='relative'>
        <span className='absolute left-2 top-0 text-3xl font-semibold text-white'>
          {operation}
        </span>
      </div>

      <p
        className='mb-4 flex h-full items-baseline justify-end overflow-hidden rounded-md border-4 border-slate-600 bg-slate-900 px-2 py-1 pt-7 text-right text-6xl text-white shadow-md shadow-purple-300'
        style={{ whiteSpace: 'nowrap' }}
        ref={pRef}
      >
        {displayValue}
      </p>
    </div>
  );
}
