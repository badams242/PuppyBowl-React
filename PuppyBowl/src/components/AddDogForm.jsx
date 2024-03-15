import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddDogForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-pt-web-pt/players');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleBreedChange = event => {
    setBreed(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-pt-web-pt/players', {
        name,
        breed,
      });
      const newPlayer = response.data;
      setPlayers([...players, newPlayer]);
      setName('');
      setBreed('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-pt-web-pt/players/${id}`);
      const updatedPlayers = players.filter(player => player.id !== id);
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h2>Add Dog Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Breed:
          <input type="text" value={breed} onChange={handleBreedChange} />
        </label>
        <button type="submit">Add Dog</button>
      </form>
      <h3>Dog List</h3>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.breed}
            <button onClick={() => handleDelete(player.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddDogForm;