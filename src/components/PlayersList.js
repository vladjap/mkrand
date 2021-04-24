import React, { useState } from 'react';
import PlayerItem from "../components/PlayerItem";
import { PlayersData } from "../assets/data";

import './PlayerList.css';
import {getPlayerById} from "../utils";

const PlayersList = ({ player1, player2, historyPlayer1, historyPlayer2, resetPlayers }) => {

    const [isHistoryOpen, setIsHistoryOpen] = useState(true);
    return <div className='PlayersListWrapper'>
        <span className='HistoryButton' onClick={() => {
            setIsHistoryOpen(!isHistoryOpen);
        }}>HISTORY</span>
        {resetPlayers && <div className='players-reseted'>Players Reseted</div>}
        <div className={`players-history  ${isHistoryOpen ? 'open' : ''}`}>
            {historyPlayer1.length === 0 && <div className='players-history-item'>History is empty</div>}
            {historyPlayer1.map((player1Item, key) => {
                const player1ItemHistory = getPlayerById(player1Item);
                const player2ItemHistory = getPlayerById(historyPlayer2[key]);
                return <div className='players-history-item'>
                    {key + 1}. {player1ItemHistory?.name} VS {player2ItemHistory?.name}
                </div>
            })}
        </div>
        <div className='PlayersList'>
            {PlayersData.map(player => <PlayerItem
                key={player?.id}
                name={player?.name}
                img={player?.image}
                isPlayer1={player1?.id === player?.id}
                isPlayer2={player2?.id === player?.id}
                wasPlayer1={historyPlayer1.includes(player?.id)}
                wasPlayer2={historyPlayer2.includes(player?.id)}
            />)}
        </div>
    </div>
}

export default PlayersList;
