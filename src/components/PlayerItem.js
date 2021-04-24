import React from 'react';

const PlayerItem = ({ img, name, isPlayer1, isPlayer2, wasPlayer1, wasPlayer2 }) => {
    const player1ActiveClass = isPlayer1 ? ' player-1-active' : '';
    const player2ActiveClass = isPlayer2 ? ' player-2-active' : '';
    const wasPlayer1Class = wasPlayer1 ? ' was-player-1' : '';
    const wasPlayer2Class = wasPlayer2 ? ' was-player-2' : '';

    const additionalClasses = `${player1ActiveClass}${player2ActiveClass}${wasPlayer1Class}${wasPlayer2Class}`;
    return <div
            className={`PlayerItem ${additionalClasses}`}
        >
        <img src={img} alt={name} />
    </div>
}

export default PlayerItem;
