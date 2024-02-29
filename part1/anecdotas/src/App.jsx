import React, { useState } from 'react';

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const Boton = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotedIndex, setMostVotedIndex] = useState(0);
  const [selectedAnecdoteIndex, setSelectedAnecdoteIndex] = useState(0); // Estado para el índice de la anécdota seleccionada

  const handleNextAnecdote = () => {
    const newIndex = getRandomIndex(anecdotes.length); // Llamamos a getRandomIndex con la longitud de anecdotes
    setSelectedAnecdoteIndex(newIndex);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selectedAnecdoteIndex] += 1;
    setVotes(updatedVotes);

    // Actualizar la anécdota con más votos
    const maxVotes = Math.max(...updatedVotes);
    const maxVotesIndex = updatedVotes.indexOf(maxVotes);
    setMostVotedIndex(maxVotesIndex);
  };

  return (
    <div>
      <p>{anecdotes[selectedAnecdoteIndex]}</p>
      <p>Votes: {votes[selectedAnecdoteIndex]}</p>
      <Boton text="Vote" handleClick={handleVote} />
      <Boton text="Next Anecdote" handleClick={handleNextAnecdote} />
    
      <h2>Most Voted Anecdote</h2>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>Votes: {votes[mostVotedIndex]}</p>
    </div>
  );
};

export default App;