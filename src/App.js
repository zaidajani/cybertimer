import './App.css';
import Navbar from './components/Navbar';
import scrambleGenerator from "rubiks-cube-scramble";
import Scramble from './components/Scramble';
import React, { useState } from 'react';

function App() {
  const [scramble, setScramble] = useState(null)

  const generateScramble = () => {
    setScramble(scrambleGenerator());
  }

  return (
   <>
    <Navbar />
    <Scramble scramble={scramble} />
   </>
  );
}

export default App;
