export const createPlayer = async (newPlayer) => {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    });

    // Check for success status (status code 2xx)
    if (response.ok) {
      return response.json();
    } else {
      // Handle non-success status (e.g., validation errors)
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error('Error creating new player:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`, {
      method: 'DELETE',
    });

    // Check for success status (status code 2xx)
    if (response.ok) {
      return response.json();
    } else {
      // Handle non-success status
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
  } catch (error) {
    console.error(`Error deleting player with ID ${playerId}:`, error);
    throw error; // Rethrow the error to handle it in the component
  }
};