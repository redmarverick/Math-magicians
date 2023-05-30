import React from 'react';
import '../styles/calculator.css';
import Keypad from './keypad';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <Keypad />
    </div>
  );
}

export default Calculator;
