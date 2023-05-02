import React, { useState } from 'react';

// Components
import InputLine from './components/InputLine';
import Keypad from './components/Keypad';
import { GoMarkGithub } from 'react-icons/go';

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

  function handleDelete() {
    if (operation === null && firstValue.length > 0) {
      const newValue = firstValue.slice(0, -1);
      setFirstValue(newValue);
      setValueToDisplay(newValue);
    } else if (secondValue.length > 0) {
      const newValue = secondValue.slice(0, -1);
      setSecondValue(newValue);
      setValueToDisplay(newValue);
    }
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center overflow-x-hidden bg-indigo-100'>
      <div className='relative flex min-h-fit max-w-xs flex-col items-center justify-center rounded-md border-8 border-slate-500 p-2 shadow-lg shadow-slate-600'>
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
          handleDelete={handleDelete}
        />
      </div>
      <footer className='absolute bottom-0 left-0 right-0 flex items-center justify-center bg-gray-100 py-2 text-center'>
        <a href='https://github.com/FrancoCanzani/Calculator' target='blank'>
          <GoMarkGithub style={{ fontSize: '30px' }} />
        </a>
      </footer>
    </div>
  );
}

export default App;
