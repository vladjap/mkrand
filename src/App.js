import React, { useState, useEffect } from "react";
import './App.css';
import RandomScreen from "./containers/RandomScreen";
import { getRandomPlayer, getPlayerById } from './utils.js';

function App() {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

    const [player1Last, setPlayer1Last] = useState(null);
    const [player2Last, setPlayer2Last] = useState(null);

    const [playersChoosed, setPlayersChoosed] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (playersChoosed) {

            let newPlayer1 = player1;
            let newPlayer2 = player2;

            while(newPlayer1 === player1Last) {
                console.log("ISTI JE BORAC KAO PROSLI p1")
                newPlayer1 = getRandomPlayer();
            }
            while(newPlayer1 === player1Last) {
                console.log("ISTI JE BORAC KAO PROSLI p2")
                newPlayer1 = getRandomPlayer();
            }
            if (newPlayer1 !== player1) {
                setPlayer1(newPlayer1);
            }
            if (newPlayer2 !== player2) {
                setPlayer2(newPlayer2);
            }
            setLoading(false);
        }

    }, [playersChoosed, player1, player2, player1Last, player2Last]);

    return (
        <div className="App">
            <button
                className={`ChooseButton grad1 ${loading ? 'loading' : ''}`}
                onClick={() => {
                setPlayersChoosed(false);
                setLoading(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });

                const intervalVal = setInterval(() => {
                    setPlayer1(getRandomPlayer());
                    setPlayer2(getRandomPlayer());
                }, 100);

                setTimeout(() => {
                    clearInterval(intervalVal);
                    setPlayer1Last(player1);
                    setPlayer2Last(player2);
                    setPlayersChoosed(true);
                }, 2000);

                }}
                disabled={loading}
            >
                {!loading && 'Choose Kombatants'}
                {loading && 'Loading'}
            </button>

            <RandomScreen
                player1={getPlayerById(player1)}
                player2={getPlayerById(player2)}
            />
        </div>
    );
}

export default App;
