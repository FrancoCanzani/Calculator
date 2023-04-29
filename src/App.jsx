import React from 'react';
import { useState } from 'react';

// Components
import InputLine from './components/InputLine';
import Keypad from './components/Keypad';

function App() {
  const [numberDisplay, setNumberDisplay] = useState(0);
  return (
    <div className='flex h-screen w-screen items-center justify-center bg-indigo-100'>
      <div className='h-3/5 w-3/5 rounded-md border-4 border-slate-500 p-2'>
        <InputLine numberDisplay={numberDisplay} />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
