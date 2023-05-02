import React from 'react';

import UtilityButton from './buttons/UtilityButton';
import { FiDelete } from 'react-icons/fi';

export default function UtilityButtons({
  handleResetValue,
  handleClear,
  handleDelete,
}) {
  return (
    <div className='mb-2 ml-1 flex w-full items-center'>
      <UtilityButton event={handleClear} text={'C'} />
      <UtilityButton event={handleResetValue} text={'AC'} />
      <UtilityButton
        event={handleDelete}
        text={<FiDelete style={{ fontSize: '28px' }} />}
      />
    </div>
  );
}
