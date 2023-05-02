import React from 'react';

import NumberButton from './buttons/NumberButton';
import OperatorButton from './buttons/OperatorButton';
import EqualButton from './buttons/EqualButton';
import DotButton from './buttons/DotButton';
import UtilityButtons from './UtilityButtons';

export default function Keypad({
  handleConcat,
  handleOperation,
  handleOperator,
  handleResetValue,
  handleClear,
  handleDelete,
  handlePercentage,
}) {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      <UtilityButtons
        handleResetValue={handleResetValue}
        handleClear={handleClear}
        handleDelete={handleDelete}
        handlePercentage={handlePercentage}
      />

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
      <DotButton num={'.'} handleConcat={handleConcat} />
      <EqualButton handleOperation={handleOperation} />
      <OperatorButton operator={'+'} handleOperator={handleOperator} />
    </div>
  );
}
