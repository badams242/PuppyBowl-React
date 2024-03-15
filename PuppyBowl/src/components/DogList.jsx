import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogList = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-pt-web-pt/players');
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Dog List</h2>
      <input
        type="text"
        placeholder="Search by player name"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredPlayers.map(player => (
          <li key={player.id}>
            {player.name} - {player.breed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;