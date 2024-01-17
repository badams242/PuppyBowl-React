import React, { useState } from 'react';
import { fetchPlayers } from '../API';

const SearchBar = ({ setFilteredPlayers }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const handleSearch = async () => {
    try {
      // Fetch all players
      const allPlayers = await fetchPlayers();

      // Filter players based on the search text
      const filteredPlayers = allPlayers.filter((player) =>
        player.name.toLowerCase().includes(searchText.toLowerCase())
      );

      // Update the state with the filtered players
      setFilteredPlayers(filteredPlayers);
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('Error fetching players for search:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a player..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;