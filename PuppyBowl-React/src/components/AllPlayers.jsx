import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSinglePlayer } from './api';
import './App.css';

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const { playerId } = useParams();

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const singlePlayerData = await fetchSinglePlayer(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`);
        setPlayer(singlePlayerData);
        setLoading(false); // Set loading to false when data is available
      } catch (error) {
        console.error('Error fetching single player details:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchPlayerDetails();
  }, [playerId]);

  const handleNavigateBack = () => {
    navigate('/all-players');
  };

  return (
    <div className="players-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{player.name}</h2>
          {/* Render other player details */}
          <button onClick={handleNavigateBack}>Go Back to All Players</button>
        </>
      )}
    </div>
  );
};

export default SinglePlayer;