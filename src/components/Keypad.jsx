import { React, useEffect } from 'react';

import NumberButton from './buttons/NumberButton';
import OperatorButton from './buttons/OperatorButton';
import EqualButton from './buttons/EqualButton';
import DotButton from './buttons/DotButton';

export default function Keypad({
  handleConcat,
  handleOperation,
  handleOperator,
}) {
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 110:
        handleConcat('.');
        break;
      case 48:
        handleConcat(0);
        break;
      case 96:
        handleConcat(0);
        break;
      case 49:
        handleConcat(1);
        break;
      case 97:
        handleConcat(1);
        break;
      case 50:
        handleConcat(2);
        break;
      case 98:
        handleConcat(2);
        break;
      case 51:
        handleConcat(3);
        break;
      case 99:
        handleConcat(3);
        break;
      case 52:
        handleConcat(4);
        break;
      case 100:
        handleConcat(4);
        break;
      case 53:
        handleConcat(5);
        break;
      case 101:
        handleConcat(5);
        break;
      case 54:
        handleConcat(6);
        break;
      case 102:
        handleConcat(6);
        break;
      case 55:
        handleConcat(7);
        break;
      case 103:
        handleConcat(7);
        break;
      case 56:
        handleConcat(8);
        break;
      case 104:
        handleConcat(8);
        break;
      case 57:
        handleConcat(9);
        break;
      case 105:
        handleConcat(9);
        break;
      case 107:
        handleOperator('+');
        break;
      case 109:
        handleOperator('-');
        break;
      case 106:
        handleOperator('x');
        break;
      case 111:
        handleOperator('÷');
        break;
      case 190:
        handleConcat('.');
        break;
      case 13:
        handleOperation();
        break;
      default:
        break;
    }
  };

  // sets up an event listener for a keydown event on the DOM, which triggers the handleKeyDown function.
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

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
      <DotButton num={'.'} handleConcat={handleConcat} />
      <EqualButton handleOperation={handleOperation} />
      <OperatorButton operator={'+'} handleOperator={handleOperator} />
    </div>
  );
}
