const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-PT';

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching players:', error.message);
    throw error;
  }
};

export const fetchPlayerById = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching player with ID ${playerId}:`, error.message);
    throw error;
  }
};

export const createPlayer = async (playerData) => {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating player:', error.message);
    throw error;
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting player with ID ${playerId}:`, error.message);
    throw error;
  }
};