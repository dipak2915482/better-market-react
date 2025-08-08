import React from 'react';
import SignupForm from './components/SignupForm';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="left-panel">
        <h1 className="logo">better<br/>market</h1>
        <p className="tagline">Say hello to global food and beverage producers and suppliers, all in one place</p>
      </div>
      <div className="right-panel">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
