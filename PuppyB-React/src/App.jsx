import React, { useState, useEffect } from 'react';
import { Players, PlayerForm, PlayerCard } from './index';
import { fetchAllPlayers } from '../ajaxHelpers';

const App = () => {
    const [players, setPlayers] = useState([]);
    const [toggle, setToggle] = useState(false);

    // getAllPlayers function to be used in useEffect because it needs async/await
    const getAllPlayers = async () => {
        try {
            const players = await fetchAllPlayers();
            setPlayers(players);
        } catch (error) {
            console.error('Error fetching players:', error.message);
        }
    };

    // useEffect to get initial players
    useEffect(() => {
        getAllPlayers();
    }, []);

    // Function to handle "see-details-bttn" click
    const handleSeeDetails = () => {
        setToggle(true);
    };

    // Function to handle "go-back-bttn" click
    const handleGoBack = () => {
        setToggle(false);
    };

    // useEffect to listen for toggle changes
    useEffect(() => {
        // Add logic here based on toggle value
    }, [toggle]);

    return (
        <>
            <PlayerForm />
            {toggle ? (
                <PlayerCard players={players} toggle={toggle} onGoBack={handleGoBack} />
            ) : (
                <Players players={players} toggle={toggle} onSeeDetails={handleSeeDetails} />
            )}
        </>
    );
};

export default App;