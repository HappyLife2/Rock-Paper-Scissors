import React, { useState } from 'react';
import '../styles/main.scss';

const Game = () => {
  // State variables
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  // Function to handle user choice
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
    determineWinner();
  };

  // Function to generate computer choice
  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  // Function to determine the winner
  const determineWinner = () => {
    if (userChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  // Render the game interface
  return (
    <div className="container">
      <h1>Rock, Paper, Scissors</h1>
      <div className="choices">
        <button onClick={() => handleUserChoice('rock')}>Rock</button>
        <button onClick={() => handleUserChoice('paper')}>Paper</button>
        <button onClick={() => handleUserChoice('scissors')}>Scissors</button>
      </div>
      <div className="result">
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Game;