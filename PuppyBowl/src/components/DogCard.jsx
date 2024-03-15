import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogCard = ({ id }) => {
  const [puppy, setPuppy] = useState(null);

  useEffect(() => {
    const fetchPuppy = async () => {
      try {
        const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-pt-web-pt/players/${id}`);
        setPuppy(response.data);
      } catch (error) {
        console.error('Error fetching puppy:', error);
      }
    };

    fetchPuppy();
  }, [id]);

  if (!puppy) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img src={puppy.imgUrl} alt={puppy.name} />
      <div className="card-body">
        <h5 className="card-title">{puppy.name}</h5>
        <p className="card-text">Status: {puppy.status}</p>
      </div>
    </div>
  );
};

export default DogCard;