import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from './api'; // Correct the import statement
import './App.css';

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

  const handleDeletePlayer = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this player?');
    if (confirmdeletion) {
    try {
      await deletePlayer(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`);
      navigate('/all-players'); // Redirect to AllPlayers after deletion
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div className= "player-details">
      <h2>{player.name}</h2>
      {/* Render other player details */}
      <button className="back" onClick={handleNavigateBack}>Go Back to All Players</button>
      <button className="delete" onClick={handleDeletePlayer}>Delete Player</button>
    </div>
  );
};

export default SinglePlayer;