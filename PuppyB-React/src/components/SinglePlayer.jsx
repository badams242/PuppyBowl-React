import React from 'react';

const SinglePlayer = ({ players, setToggle }) => {
    try {
        return (
            <>
                <div id='single-player-view'>
                    {players.map((player, index) => (
                        <div className='single-player-card' key={player.name + index}>
                            <div className="header-info">
                                <p className='pup-title'>{player.name}</p>
                                <p className='pup-number'>{player.id}</p>
                            </div>
                            <p>{player.status}</p>
                            <p>{player.breed}</p>
                            <img src={player.imageUrl} alt="" />
                            <button id="see-all" onClick={() => setToggle(false)}>
                                Back to all players
                            </button>
                        </div>
                    ))}
                </div>
            </>
        );
    } catch (error) {
        console.log('single Player error');
    }
}

export default SinglePlayer;