import './App.css';
import scrambleGenerator from "rubiks-cube-scramble";
import Navbar from './components/Navbar';
import Stopwatch from './components/Stopwatch';
import React, { useState } from 'react';

function App() {
  console.log(scrambleGenerator());

  return (
    <>
      <Navbar scranble={scrambleGenerator()} />
      <Stopwatch />
    </>
  );
}

export default App;
