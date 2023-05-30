import React from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

function Keypad({ onButtonClick }) {
  return (
    <div className="Keypad">
      <button className="key" type="button" onClick={() => onButtonClick('AC')} data="AC">AC</button>
      <button className="key" type="button" onClick={() => onButtonClick('+/-')} data="+/-">+/-</button>
      <button className="key" type="button" onClick={() => onButtonClick('%')} data="%">%</button>
      <button className="key orange" type="button" onClick={() => onButtonClick('÷')} data="÷">÷</button>
      <button className="key" type="button" onClick={() => onButtonClick('7')} data="7">7</button>
      <button className="key" type="button" onClick={() => onButtonClick('8')} data="8">8</button>
      <button className="key" type="button" onClick={() => onButtonClick('9')} data="9">9</button>
      <button className="key orange" type="button" onClick={() => onButtonClick('x')} data="x">x</button>
      <button className="key" type="button" onClick={() => onButtonClick('4')} data="4">4</button>
      <button className="key" type="button" onClick={() => onButtonClick('5')} data="5">5</button>
      <button className="key" type="button" onClick={() => onButtonClick('6')} data="6">6</button>
      <button className="key orange" type="button" onClick={() => onButtonClick('-')} data="-">-</button>
      <button className="key" type="button" onClick={() => onButtonClick('1')} data="1">1</button>
      <button className="key" type="button" onClick={() => onButtonClick('2')} data="2">2</button>
      <button className="key" type="button" onClick={() => onButtonClick('3')} data="3">3</button>
      <button className="key orange" type="button" onClick={() => onButtonClick('+')} data="+">+</button>
      <button className="key zero" type="button" onClick={() => onButtonClick('0')} data="0">0</button>
      <button className="key" type="button" onClick={() => onButtonClick('.')} data=".">.</button>
      <button className="key orange" type="button" onClick={() => onButtonClick('=')} data="=">=</button>
    </div>
  );
}

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
