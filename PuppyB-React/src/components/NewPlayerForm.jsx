import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPlayer } from '../API';

const NewPlayerForm = () => {
  const [newPlayerData, setNewPlayerData] = useState({
    name: '',
    teamId: '',
    breed: '',
    status: '',
    // Add other fields as needed
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayerData({ ...newPlayerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to create a new player
      await createPlayer(newPlayerData);

      // Redirect to the AllPlayers page after successful creation
      history.push('/');
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('Error creating player:', error.message);
    }
  };

  return (
    <div>
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newPlayerData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Team:
          <input type="text" name="team" value={newPlayerData.team} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Owner:
          <input type="text" name="owner" value={newPlayerData.owner} onChange={handleInputChange} />
        </label>
        <br />
        {/* Add other input fields as needed */}
        <br />
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;