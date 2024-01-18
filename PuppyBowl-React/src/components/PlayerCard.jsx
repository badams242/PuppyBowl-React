import React from 'react';
import { SinglePlayer, Players } from './index';

// Determine which view to display based on the value of toggle
const PlayerCard = ({ toggle }) => {
    if (toggle) {
        return <SinglePlayer />;
    } else {
        // Assuming that if toggle is not true, display the Players view
        return <Players />;
    }
};

export default PlayerCard;