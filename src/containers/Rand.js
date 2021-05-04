import React, { useState, useEffect } from "react";
import { last } from 'lodash';
import {
 useParams
} from "react-router-dom";
import axios from 'axios';
import { socket } from '../socketConfig';
import RandomScreen from "./RandomScreen";
import { getRandomPlayer, getPlayerById } from '../utils.js';
import {API_URL, GET_ROOM_DATA_ENDPOINT} from "../constants";


// const ENDPOINT = "http://127.0.0.1:3000"; // https://mkrand-api.herokuapp.com/


// console.log(ENDPOINT, 'ENDPOINT');


function Rand() {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);

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
    const [roomData, setRoomData] = useState(null);

    const { roomName } = useParams();

    // console.log('da');
    // let socket = null;

    // socket.on('random running', function(msg) {
    //     console.log(msg, 'msg');
    // });

    useEffect(() => {
        if (!isRandomRunning) {
            if (intervalVal) {
                clearInterval(intervalVal);
                setPlayer1(randomPlayerFromOther?.player1);
                setPlayer2(randomPlayerFromOther?.player2);
            }
            // console.log(' el to?', randomPlayerFromOther);


        }
        if (!isSocketRandHandled) {
            // socket.on('chat message', function(msg) {
            //     console.log(msg, 'msg');
            // });
            socket.emit('joinOrCreateAndJoinRoom', {
                name: roomName,
            });
            socket.on('random running', function(msg) {
                if (msg?.status) {
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
                setRandomPlayerFromOther(msg?.randomData);
                // setHistoryPlayer1(msg?.historyPlayer1);
                // setHistoryPlayer2(msg?.historyPlayer2);
                setResetPlayers(msg?.resetPlayers);
                // setPlayer1(msg?.randomData?.player1);
                // setPlayer2(msg?.randomData?.player2);
                // socket.emit('random running');
            });


            socket.on('changes', function(data) {
                console.log('changes FE', data);
            });

            socket.on('roomsChanged', function(data) {
                setHistoryPlayer1(data?.historyP1);
                setHistoryPlayer2(data?.historyP2);
                setIsRandomRunning(false);
                //historyP1
            });

            // socket.emit('createUser', {
            //     myID: '608efcb2cf88166ff7d3261d',
            //     name: 'VLad',
            //     age: 12,
            // });

            async function fetchData() {
                const response = await axios.get(`${API_URL}${GET_ROOM_DATA_ENDPOINT}${roomName}`);
                // setRoomData(response?.data);
                const historyP1 = response?.data?.historyP1;
                const historyP2 = response?.data?.historyP2;
                const lastP1 = last(historyP1);
                const lastP2 = last(historyP2);
                setPlayer1(lastP1);
                setPlayer2(lastP2);
                // setRandomPlayerFromOther({
                //     player1: lastP1,
                //     player2: lastP2,
                // });
                setHistoryPlayer1(historyP1);
                setHistoryPlayer2(historyP2);

            }
            fetchData();

            setIsSocketRandHandled(true);

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
                    if (socket){
                        socket.emit('random running', {
                            status: true,
                            room: roomName,
                        });
                        setIsRandomRunning(true);
                        setIntervalVal(setInterval(() => {
                            setPlayer1(getRandomPlayer());
                            setPlayer2(getRandomPlayer());
                        }, 100));
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

export default Rand;
