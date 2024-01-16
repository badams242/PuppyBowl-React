export const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching players:', error);
      return [];
    }
  };
  
  export const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players/${playerId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching player with ID ${playerId}:`, error);
      return {};
    }
  };
  
  export const createPlayer = async (newPlayer) => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer),
      });
      const data = await response.json();
      return data;
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
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting player with ID ${playerId}:`, error);
      throw error; // Rethrow the error to handle it in the component
    }
  };