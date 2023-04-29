import React from 'react';

import NumberButton from './NumberButton';
import OperationButton from './OperationButton';

export default function Keypad({ handleConcat }) {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <NumberButton num={7} handleConcat={handleConcat} />
      <NumberButton num={8} handleConcat={handleConcat} />
      <NumberButton num={9} handleConcat={handleConcat} />
      <OperationButton operation={'÷'} />

      <NumberButton num={4} handleConcat={handleConcat} />
      <NumberButton num={5} handleConcat={handleConcat} />
      <NumberButton num={6} handleConcat={handleConcat} />
      <OperationButton operation={'x'} />

      <NumberButton num={1} handleConcat={handleConcat} />
      <NumberButton num={2} handleConcat={handleConcat} />
      <NumberButton num={3} handleConcat={handleConcat} />
      <OperationButton operation={'-'} />

      <NumberButton num={0} handleConcat={handleConcat} />
      <NumberButton num={'.'} handleConcat={handleConcat} />
      <OperationButton operation={'='} />
      <OperationButton operation={'+'} />
    </div>
  );
}
