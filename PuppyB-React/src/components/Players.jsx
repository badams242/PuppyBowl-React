import React from 'react';

const Players = ({ players, toggle, setToggle }) => {
    console.log(players);

    try {
        return (
            <>
                <div id='all-players-container'>
                    {players.map((player, index) => {
                        return (
                            <div className='single-player-card' key={player.breed + index}>
                                <div className='header-info'>
                                    <p className='pup-title'>{player.name}</p>
                                    <p className='pup-number'>{player.id}</p>
                                </div>
                                <img src={player.imageUrl} alt="" />
                                <button id="see-details-bttn" type="button" onClick={() => setToggle(!toggle)}>
                                    See Details
                                </button>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    } catch (error) {
        console.log('error');
    }
};

export default Players;