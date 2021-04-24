import React, { useState, useEffect } from "react";
import { isEqual } from 'lodash';
import socketIOClient from "socket.io-client";
import './App.css';
import RandomScreen from "./containers/RandomScreen";
import { getRandomPlayer, getPlayerById } from './utils.js';

const ENDPOINT = "http://127.0.0.1:3000"; // https://mkrand-api.herokuapp.com/
// const ENDPOINT = "https://mkrand-api.herokuapp.com";
const socket = socketIOClient(ENDPOINT);


function App() {
    const [player1, setPlayer1] = useState('shts');
    const [player2, setPlayer2] = useState('shts');

    const [player1Last, setPlayer1Last] = useState(null);
    const [player2Last, setPlayer2Last] = useState(null);

    const [playersChoosed, setPlayersChoosed] = useState(false);
    const [loading, setLoading] = useState(false);

    const [response, setResponse] = useState("");

    const [sentRandEvent, setSentRandEvent] = useState(false);
    const [isSocketRandHandled, setIsSocketRandHandled] = useState(false);
    const [isRandomRunning, setIsRandomRunning] = useState(false);
    const [intervalVal, setIntervalVal] = useState(null);
    const [randomPlayerFromOther, setRandomPlayerFromOther] = useState(null);

    const [historyPlayer1, setHistoryPlayer1] = useState([]);
    const [historyPlayer2, setHistoryPlayer2] = useState([]);
    const [resetPlayers, setResetPlayers] = useState(false);

    // console.log('da');
    // let socket = null;

        // socket.on('random running', function(msg) {
    //     console.log(msg, 'msg');
    // });
    console.log(historyPlayer1, 'historyPlayer1');
    console.log(historyPlayer2, 'historyPlayer2');
    console.log(resetPlayers, 'resetPlayers');


    useEffect(() => {
        if (!isSocketRandHandled) {
            // socket.on('chat message', function(msg) {
            //     console.log(msg, 'msg');
            // });
            socket.on('random running', function(msg) {
                console.log(msg, 'msg running');
                if (msg) {
                    setIsRandomRunning(true);
                    setIntervalVal(setInterval(() => {
                        setPlayer1(getRandomPlayer());
                        setPlayer2(getRandomPlayer());
                    }, 100));
                } else {
                    setIsRandomRunning(false);
                }
            });
            socket.on('random players', function(msg) {
                console.log(msg, 'random player choosed');
                setRandomPlayerFromOther(msg?.randomData);
                setHistoryPlayer1(msg?.historyPlayer1);
                setHistoryPlayer2(msg?.historyPlayer2);
                setResetPlayers(msg?.resetPlayers);
                // setPlayer1(msg?.player1);
                // setPlayer2(msg?.player2);
                // socket.emit('random running');
            });

            setIsSocketRandHandled(true);
        }

        if (!isRandomRunning) {
            clearInterval(intervalVal);
            setPlayer1(randomPlayerFromOther?.player1);
            setPlayer2(randomPlayerFromOther?.player2);
        }


        // if (playersChoosed) {
        //
        //     let newPlayer1 = player1;
        //     let newPlayer2 = player2;
        //
        //     while(newPlayer1 === player1Last) {
        //         newPlayer1 = getRandomPlayer();
        //     }
        //     while(newPlayer2 === player2Last) {
        //         newPlayer2 = getRandomPlayer();
        //     }
        //     console.log('koliko puta')
        //     if (newPlayer1 !== player1) {
        //         setPlayer1(newPlayer1);
        //     }
        //     if (newPlayer2 !== player2) {
        //         setPlayer2(newPlayer2);
        //     }
        //     if (!isEqual({ player1, player2 }, randomPlayerFromOther)) {
        //         socket.emit('random players', { player1, player2 });
        //     }
        //
        //     setLoading(false);
        // }

    }, [playersChoosed, player1, player2, player1Last, player2Last, intervalVal]);

    return (
        <div className="App">
            <button
                className={`ChooseButton grad1 ${isRandomRunning ? 'loading' : ''}`}
                onClick={() => {
                    console.log('clicked;');
                    console.log('socket', socket);
                    if (socket){
                        socket.emit('random running', true);
                    }

                    // setPlayersChoosed(false);
                    // setLoading(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });


                    // setTimeout(() => {
                    //
                    //     setPlayer1Last(player1);
                    //     setPlayer2Last(player2);
                    //     setPlayersChoosed(true);
                    //     setSentRandEvent(false);
                    //     console.log('to to to ');
                    //     if (socket) {
                    //         socket.emit('random running', false);
                    //     }
                    // }, 2000);

                }}
                disabled={isRandomRunning}
            >
                {!isRandomRunning && 'Choose Kombatants'}
                {isRandomRunning && 'Loading'}
            </button>

            <RandomScreen
                player1={getPlayerById(player1)}
                player2={getPlayerById(player2)}
                historyPlayer1={historyPlayer1}
                historyPlayer2={historyPlayer2}
                resetPlayers={resetPlayers}
            />
        </div>
    );
}

export default App;
