import React, { useState } from 'react';

// Components
import InputLine from './components/InputLine';
import Keypad from './components/Keypad';

function App() {
  const [firstValue, setFirstValue] = useState([]);
  const [secondValue, setSecondValue] = useState([]);
  const [operation, setOperation] = useState(null);
  const [valueToDisplay, setValueToDisplay] = useState(firstValue);

  function handleConcat(num) {
    if (
      num === '.' &&
      (valueToDisplay.includes('.') ||
        (operation === null && firstValue.length === 0))
    ) {
      // If the dot button is pressed and the number already contains a dot or the first value is empty and the dot is pressed,
      // then do not add a dot to the number
      return;
    }

    if (operation === null) {
      setFirstValue([...firstValue, num]);
      setValueToDisplay([...firstValue, num]);
    } else {
      setSecondValue([...secondValue, num]);
      setValueToDisplay([...secondValue, num]);
    }
  }

  function handleOperator(operator) {
    setOperation(operator);
    setValueToDisplay(secondValue.length ? secondValue : firstValue);
  }

  function handleOperation() {
    let result;
    switch (operation) {
      case '+': {
        result = parseInt(firstValue.join('')) + parseInt(secondValue.join(''));
        break;
      }
      case '-': {
        result = parseInt(firstValue.join('')) - parseInt(secondValue.join(''));
        break;
      }
      case '÷': {
        result = parseInt(firstValue.join('')) / parseInt(secondValue.join(''));
        break;
      }
      case 'x': {
        result = parseInt(firstValue.join('')) * parseInt(secondValue.join(''));
        break;
      }
      default: {
        result = NaN;
        break;
      }
    }
    setFirstValue([result]);
    setSecondValue([]);
    setValueToDisplay([result.toString()]);
  }

  function handleResetValue() {
    if (operation === null) {
      setFirstValue([]);
      setValueToDisplay([]);
    } else {
      setSecondValue([]);
      setValueToDisplay([]);
    }
  }

  function handleClear() {
    setFirstValue([]);
    setSecondValue([]);
    setOperation(null);
    setValueToDisplay([]);
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-indigo-100'>
      <div className='flex min-h-fit max-w-xs flex-col items-center justify-center rounded-md border-8 border-slate-500 p-2 shadow-lg shadow-slate-600'>
        <InputLine
          operation={operation}
          numberDisplay={valueToDisplay.join('')}
        />
        <Keypad
          handleConcat={handleConcat}
          handleOperation={handleOperation}
          handleOperator={handleOperator}
          handleResetValue={handleResetValue}
          handleClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;
