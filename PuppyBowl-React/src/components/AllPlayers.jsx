import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSinglePlayer } from './api'; // Correct the import statement

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  const navigate = useNavigate();
  const { playerId } = useParams();

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        // Use template literals for dynamic URLs
        const singlePlayerData = await fetchSinglePlayer(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`);
        setPlayer(singlePlayerData);
      } catch (error) {
        console.error('Error fetching single player details:', error);
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  const handleNavigateBack = () => {
    navigate('/all-players'); // Adjust the path based on your route structure
  };

  return (
    <div>
      <h2>{player.name}</h2>
      {/* Render other player details */}
      <button onClick={handleNavigateBack}>Go Back to All Players</button>
    </div>
  );
};

export default SinglePlayer;