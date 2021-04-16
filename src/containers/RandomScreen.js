import React from 'react';
import PlayersList from "../components/PlayersList";
import JoystickButton from "../components/Joystick/JoystickButton";

import questionMark from '../assets/qm.png'

const RandomScreen = ({ player1, player2 }) => {

    // console.log(player1, 'player1');
    return <div className='RandomScreen'>
        <div className='player-1'>
            Player 1:
            {player1?.name && <div>{player1.name}</div>}
            {player1?.image && <div>
                <img className='SelectedPlayer' alt={player1?.name} src={player1?.image} />
            </div>}
            {player1?.kombos && <span>Kombos:</span>}
            {player1?.kombos && player1?.kombos.map( kombo => {
                return <div className='buttons-list-wrapper'>
                    <span>{kombo?.name}</span>
                    {kombo && kombo?.moveList?.map(move => <span className='button-move'>
                        <JoystickButton type={move} />
                    </span>)}
                </div>;
            })}
            {player1?.specials && <span>Special:</span>}
            {player1?.specials && player1?.specials.map( special => {
                return <div className='buttons-list-wrapper'>
                    <span>{special?.name}</span>
                    {special && special?.moveList?.map(move => <span className='button-move'>
                        <JoystickButton type={move} />
                    </span>)}
                </div>;
            })}
            {!player1 && <img className='SelectedPlayer' src={questionMark} alt='empty' />}
        </div>
        <PlayersList player1={player1} player2={player2} />
        <div className='player-2'>
            Player 2
            {player2?.name && <div>{player2.name}</div>}
            {player2?.image && <div>
                <img className='SelectedPlayer' alt={player2?.name} src={player2?.image} />
            </div>}
            {player1?.kombos && <span>Kombos:</span>}
            {player2?.kombos && player2?.kombos.map( kombo => {
                return <div className='buttons-list-wrapper'>
                    <span>{kombo?.name}</span>
                    {kombo && kombo?.moveList?.map(move => <span className='button-move'>
                        <JoystickButton type={move} />
                    </span>)}
                </div>;
            })}
            {player2?.kombos && <span>Special:</span>}
            {player2?.specials && player2?.specials.map( special => {
                return <div className='buttons-list-wrapper'>
                    <span>{special?.name}</span>
                    {special && special?.moveList?.map(move => <span className='button-move'>
                        <JoystickButton type={move} />
                    </span>)}
                </div>;
            })}
            {!player2 && <img className='SelectedPlayer' src={questionMark} alt='empty' />}
        </div>
    </div>
}

export default RandomScreen;
