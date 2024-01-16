import React, { useState } from 'react';
import { createPlayer } from './api'; // Correct the import statement

const NewPlayerForm = () => {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    // Add other properties for the new player
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use template literals for dynamic URLs
      await createPlayer(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players`, newPlayer);
      // Optionally, you can redirect or update the player list
      setNewPlayer({
        name: '',
        // Reset other form inputs
      });
    } catch (error) {
      console.error('Error creating new player:', error);
    }
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newPlayer.name} onChange={handleInputChange} />
        </label>
        {/* Add other form inputs */}
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;