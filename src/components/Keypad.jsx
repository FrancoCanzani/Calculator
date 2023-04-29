import React from 'react';

import NumberButton from './NumberButton';
import GhButton from './GhButton';
import OperationButton from './OperationButton';

export default function Keypad() {
  return (
    <div className='flex flex-wrap'>
      <NumberButton num={7} />
      <NumberButton num={8} />
      <NumberButton num={9} />
      <OperationButton operation={'÷'} />

      <NumberButton num={4} />
      <NumberButton num={5} />
      <NumberButton num={6} />
      <OperationButton operation={'x'} />

      <NumberButton num={1} />
      <NumberButton num={2} />
      <NumberButton num={3} />
      <OperationButton operation={'-'} />

      <GhButton />
      <NumberButton num={0} />
      <NumberButton num={'.'} />
      <OperationButton operation={'='} />
    </div>
  );
}
