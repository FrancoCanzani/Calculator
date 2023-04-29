import React from 'react';
import { useState, useEffect } from 'react';

// Components
import InputLine from './components/InputLine';
import Keypad from './components/Keypad';

function App() {
  const [firstValue, setFirstValue] = useState(['']);
  const [secondValue, setSecondValue] = useState(['']);
  const [operation, setOperation] = useState(null);
  const [valueToDisplay, setValueToDisplay] = useState(firstValue);
  const [numberDisplay, setNumberDisplay] = useState(valueToDisplay);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setNumberDisplay(valueToDisplay.join(''));
  }, [valueToDisplay]);

  const handleConcat = (num) => {
    if (valueToDisplay === firstValue) {
      setFirstValue([...firstValue, num]);
      setValueToDisplay([...firstValue, num]);
    } else {
      setSecondValue([...secondValue, num]);
      setValueToDisplay([...secondValue, num]);
    }
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-indigo-100'>
      <div className='flex h-3/5 max-w-xs flex-col items-center justify-center rounded-md border-4 border-slate-500 p-2'>
        <InputLine numberDisplay={numberDisplay} />
        <Keypad handleConcat={handleConcat} />
      </div>
    </div>
  );
}

export default App;
