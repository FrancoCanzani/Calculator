import React from 'react';

import CButton from './buttons/CButton';
import CeButton from './buttons/CeButton';

export default function FunctionalButtons({
  handleResetValue,
  handleClear,
}) {
  return (
    <div className='mb-2 ml-1 block w-full'>
      <CButton handleClear={handleClear} />
      <CeButton handleResetValue={handleResetValue} />
    </div>
  );
}
