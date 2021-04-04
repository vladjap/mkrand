import React from 'react';

const PlayerItem = ({ img, name, isPlayer1, isPlayer2 }) => {
    return <div className={`PlayerItem ${isPlayer1 ? 'player-1-active' : ''} ${isPlayer2 ? 'player-2-active' : ''}`}>
        <img src={img} alt={name} />
    </div>
}

export default PlayerItem;
