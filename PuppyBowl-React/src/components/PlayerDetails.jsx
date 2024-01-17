import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../API';

const PlayerDetails = () => {
  const { id } = useParams();
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    // Fetch the details of the specific player when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchPlayerById(id);
        setPlayerDetails(data);
      } catch (error) {
        // Handle error, e.g., display an error message to the user
        console.error(`Error fetching details for player with ID ${id}:`, error.message);
      }
    };

    fetchData();
  }, [id]);

  if (!playerDetails) {
    // Optional: You can add a loading state here
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Player Details</h1>
      <p>Name: {playerDetails.name}</p>
      <p>TeamId: {playerDetails.teamId}</p>
      <p>Status: {playerDetails.status}</p>
        <p>Breed: {playerDetails.breed}</p>
      {/* Display other player details as needed */}
    </div>
  );
};
