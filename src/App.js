import React from 'react';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import Home from './components/home';
import Calculator from './components/Calculator';
import Quote from './components/QuoteDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container mx-auto px-4">
          <header className="py-4 mb-20 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Math Magicians</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/calculator">Calculator</Link>
                </li>
                <li>
                  <Link to="/quote">Quote</Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
