import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Works from './components/Works';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <About/>
        <Contact/>
        <Works/>
      </React.Fragment>
    </div>
  );
}

export default App;
