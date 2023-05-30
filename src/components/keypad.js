import React from 'react';
import '../styles/calculator.css';

function Keypad() {
  return (
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
  );
}

export default Keypad;
