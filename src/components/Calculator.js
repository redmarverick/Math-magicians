import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

const Calculator = ({ start }) => {
  const [display, setDisplay] = useState({ next: start });
  const handleButtonClick = (buttonName) => {
    setDisplay((display) => calculate(display, buttonName));
  };

  const operation = display.next ? display.next : display.total || 0;

  return (
    <div className="calculator">
      <Display value={operation} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

Calculator.propTypes = { start: PropTypes.number };
Calculator.defaultProps = { start: 0 };

export default Calculator;
