import React from 'react';
import PlayersList from "../components/PlayersList";


const RandomScreen = ({ player1, player2 }) => {

    return <div className='RandomScreen'>
        <div className='player-1'>
            Player 1:
            <div>{player1?.name}</div>
            <div><img className='SelectedPlayer' alt={player1?.name} src={player1?.image} /></div>
        </div>
        <PlayersList />
        <div className='player-2'>
            Player 2
            <div>{player2?.name}</div>
            <div><img className='SelectedPlayer' alt={player2?.name} src={player2?.image} /></div>
        </div>
    </div>
}

export default RandomScreen;
