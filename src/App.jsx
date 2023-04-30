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
    setValueToDisplay(secondValue.length > 0 ? secondValue : firstValue);
  }

  function handleOperation() {
    let result;
    switch (operation) {
      case '+': {
        result = Number(firstValue.join('')) + Number(secondValue.join(''));
        break;
      }
      case '-': {
        result = Number(firstValue.join('')) - Number(secondValue.join(''));
        break;
      }
      case '÷': {
        result = Number(firstValue.join('')) / Number(secondValue.join(''));
        break;
      }
      case 'x': {
        result = Number(firstValue.join('')) * Number(secondValue.join(''));
        break;
      }
      default: {
        throw Error('Unknown action: ' + operation);
      }
    }
    setFirstValue([result]);
    setSecondValue([]);
    setValueToDisplay([result.toString()]);
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-indigo-100'>
      <div className='flex h-3/5 max-w-xs flex-col items-center justify-center rounded-md border-8 border-slate-500 p-2 shadow-lg shadow-slate-600'>
        <InputLine numberDisplay={valueToDisplay.join('')} />
        <Keypad
          handleConcat={handleConcat}
          handleOperation={handleOperation}
          handleOperator={handleOperator}
        />
      </div>
    </div>
  );
}

export default App;
