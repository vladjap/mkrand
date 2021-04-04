import React from 'react';
import PlayersList from "../components/PlayersList";

import questionMark from '../assets/qm.png'

const RandomScreen = ({ player1, player2 }) => {

    return <div className='RandomScreen'>
        <div className='player-1'>
            Player 1:
            {player1?.name && <div>{player1.name}</div>}
            {player1?.image && <div>
                <img className='SelectedPlayer' alt={player1?.name} src={player1?.image} />
            </div>}
            {!player1 && <img className='SelectedPlayer' src={questionMark} alt='empty' />}
        </div>
        <PlayersList player1={player1} player2={player2} />
        <div className='player-2'>
            Player 2
            {player2?.name && <div>{player2.name}</div>}
            {player2?.image && <div>
                <img className='SelectedPlayer' alt={player2?.name} src={player2?.image} />
            </div>}
            {!player2 && <img className='SelectedPlayer' src={questionMark} alt='empty' />}
        </div>
    </div>
}

export default RandomScreen;
