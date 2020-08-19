import React from 'react';
import './App.css';
import './tailwind.output.css';
import Navigation from './components/Navigation'
import Foot from './components/Foot';

function App() {
  return (
    <div className="app-fondo">
      <Navigation />
      <Foot />
    </div>
  );
}

export default App;
