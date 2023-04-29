import React, { useRef, useEffect } from 'react';

export default function ScreenDisplay({ numberDisplay }) {
  const pRef = useRef(null);

  // Have the line to scroll right when the number is long and overflows the width
  useEffect(() => {
    const p = pRef.current;
    p.scrollLeft = p.scrollWidth - p.clientWidth;
  }, [numberDisplay]);

  return (
    <p
      className='mb-4 h-20 w-full overflow-hidden rounded-md bg-slate-900 px-2 py-1 text-right text-6xl text-white shadow-md shadow-purple-300'
      style={{ whiteSpace: 'nowrap' }}
      ref={pRef}
    >
      {numberDisplay}
    </p>
  );
}
