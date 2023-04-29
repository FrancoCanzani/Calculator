import React from 'react';

import NumberButton from './NumberButton';

export default function Keypad() {
  return (
    <div>
      <NumberButton num={7} />
      <NumberButton num={8} />
      <NumberButton num={9} />
      <NumberButton num={4} />
      <NumberButton num={5} />
      <NumberButton num={6} />
      <NumberButton num={1} />
      <NumberButton num={2} />
      <NumberButton num={3} />
    </div>
  );
}
