import React from 'react';
import PlayerItem from "../components/PlayerItem";
import { PlayersData } from "../assets/data";

import './PlayerList.css';

const PlayersList = ({ player1, player2 }) => {

    return <div className='PlayersList'>
        {PlayersData.map(player => <PlayerItem
            key={player?.id}
            name={player?.name}
            img={player?.image}
            isPlayer1={player1?.id === player?.id}
            isPlayer2={player2?.id === player?.id}
        />)}
    </div>
}

export default PlayersList;
