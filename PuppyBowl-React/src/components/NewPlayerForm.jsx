import React, { useState } from 'react';
import { createPlayer } from './api'; // Correct the import statement
import './App.css';

const NewPlayerForm = () => {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    breed: '',
    status: '',
    imageUrls: [],
    id : ''
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prevPlayer) => ({
      ...prevPlayer,
      [name]: value,
      [breed]: value,
        [status]: value,
        [imageUrls]: value,
        [id]: value
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
        breed: '',
        status: '',
        imageUrls: [],
        id : ''
        // Reset other form inputs
      });
    } catch (error) {
      console.error('Error creating new player:', error);
    }
  };

  return (
    <div className="create-player-form">
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

export default NewPlayerForm;import React, { useState } from 'react';
import { createPlayer } from './api';
import './App.css';

const NewPlayerForm = () => {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    breed: '',
    status: '',
    imageUrls: [],
    id: ''
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
      await createPlayer('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players', newPlayer);
      setNewPlayer({
        name: '',
        breed: '',
        status: '',
        imageUrls: [],
        id: ''
      });
    } catch (error) {
      console.error('Error creating new player:', error);
    }
  };

  return (
    <div className="create-player-form">
      <h2>Create New Player</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newPlayer.name} onChange={handleInputChange} />
        </label>
        {/* Add other form inputs for breed, status, imageUrls, and id */}
        <label>
          Breed:
          <input type="text" name="breed" value={newPlayer.breed} onChange={handleInputChange} />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={newPlayer.status} onChange={handleInputChange} />
        </label>
        {/* Add similar input fields for imageUrls and id */}
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;