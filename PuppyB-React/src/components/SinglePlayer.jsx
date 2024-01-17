import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlayerById } from '../API';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Fetch details for the specific player when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchPlayerById(id);
        setPlayer(data);
      } catch (error) {
        // Handle error, e.g., display an error message to the user
        console.error(`Error fetching details for player with ID ${id}:`, error.message);
      }
    };

    fetchData();
  }, [id]);

  if (!player) {
    // Optional: You can add a loading state here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <p>TeamId: {player.teamId}</p>
      <p>Status: {player.status}</p>
        <p>Breed: {player.breed}</p>
      {/* Display other player details as needed */}
      <Link to="/">Back to All Players</Link>
    </div>
  );
};

export default SinglePlayer;