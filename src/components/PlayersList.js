import React from 'react';
import PlayerItem from "../components/PlayerItem";
import { PlayersData } from "../assets/data";

import './PlayerList.css';

const PlayersList = () => {

    return <div className='PlayersList'>
        {PlayersData.map(player => <PlayerItem key={player?.id} name={player?.name} img={player?.image} />)}
    </div>
}

export default PlayersList;
