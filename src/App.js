import React, {useState} from "react";
import './App.css';
import RandomScreen from "./containers/RandomScreen";
import { getRandomPlayer, getPlayerById } from './utils.js';

import BackgroundImage from './assets/background.jpeg';

function App() {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

    return (
        <div className="App" style={{background: `url(${BackgroundImage})`}}>
            <button className='ChooseButton' onClick={() => {
                let newPlayer1 = getRandomPlayer();
                let newPlayer2 = getRandomPlayer();

                while(newPlayer1 === player1) {
                    newPlayer1 = getRandomPlayer();
                }
                while(newPlayer2 === player2) {
                    newPlayer2 = getRandomPlayer();
                }

                setPlayer1(newPlayer1);
                setPlayer2(newPlayer2);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} >
                BIRAJ!
            </button>

            <RandomScreen
                player1={getPlayerById(player1)}
                player2={getPlayerById(player2)}
            />
        </div>
    );
}

export default App;
