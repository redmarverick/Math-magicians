import React from 'react';
import '../styles/calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="keypad">
        <button className="key" type="button">AC</button>
        <button className="key" type="button">+/-</button>
        <button className="key" type="button">%</button>
        <button className="key orange" type="button">/</button>
        <button className="key" type="button">7</button>
        <button className="key" type="button">8</button>
        <button className="key" type="button">9</button>
        <button className="key orange" type="button">x</button>
        <button className="key" type="button">4</button>
        <button className="key" type="button">5</button>
        <button className="key" type="button">6</button>
        <button className="key orange" type="button">-</button>
        <button className="key" type="button">1</button>
        <button className="key" type="button">2</button>
        <button className="key" type="button">3</button>
        <button className="key orange" type="button">+</button>
        <button className="key zero" type="button">0</button>
        <button className="key" type="button">.</button>
        <button className="key orange" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
