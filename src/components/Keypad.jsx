import React from 'react';

import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';

export default function Keypad({
  handleConcat,
  handleOperation,
  handleOperator,
}) {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <NumberButton num={7} handleConcat={handleConcat} />
      <NumberButton num={8} handleConcat={handleConcat} />
      <NumberButton num={9} handleConcat={handleConcat} />
      <OperatorButton operator={'÷'} handleOperator={handleOperator} />

      <NumberButton num={4} handleConcat={handleConcat} />
      <NumberButton num={5} handleConcat={handleConcat} />
      <NumberButton num={6} handleConcat={handleConcat} />
      <OperatorButton operator={'x'} handleOperator={handleOperator} />

      <NumberButton num={1} handleConcat={handleConcat} />
      <NumberButton num={2} handleConcat={handleConcat} />
      <NumberButton num={3} handleConcat={handleConcat} />
      <OperatorButton operator={'-'} handleOperator={handleOperator} />

      <NumberButton num={0} handleConcat={handleConcat} />
      <NumberButton num={'.'} handleConcat={handleConcat} />
      <EqualButton handleOperation={handleOperation} />
      <OperatorButton operator={'+'} handleOperator={handleOperator} />
    </div>
  );
}
