import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '../API';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch the list of players when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        // Handle error, e.g., display an error message to the user
        console.error('Error fetching players:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {/* Link to the PlayerDetails page for each player */}
            <Link to={`/players/${player.id}`}>
              {player.name} - {player.team}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;