import React, { useEffect, useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {API_URL, GET_ROOM_DATA_ENDPOINT} from "../constants";
import {last} from "lodash";
// import {socket} from "../socketConfig";

//joinOrCreateAndJoinRoom

const Rooms = ({ selectedRoom, setSelectedRoom, roomInputValue, setRoomInputValue }) => {
    const [roomsData, setRoomsData] = useState(null);
    const [isValidRoomName, setIsValidRoomName] = useState(true);
    // console.log(roomInputValue, 'roomInputValue');
    // const [isSocketRoomHandled, setIsSocketRoomHandled] = useState(false);
    // useEffect(() => {
    //     if (!isSocketRoomHandled) {
    //
    //         // socket.on('roomsChanged', function(data) {
    //         //     console.log('changes FE rooms', data);
    //         // });
    //
    //         setIsSocketRoomHandled(true);
    //     }
    //
    // }, [isSocketRoomHandled]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`${API_URL}${GET_ROOM_DATA_ENDPOINT}`);
            setRoomsData(response?.data);

        }
        if (!roomsData) {
            fetchData();
        }

    })

    const history = useHistory();

    return <div>
        <div>
            <h2>Rooms:</h2>
            {roomsData && roomsData?.map((room, key) => {
                return <div className={'room-link'} key={`room-item-${key}`}>
                    <Link to={`/random/${room?.name}`} >{room?.name}</Link>
                </div>
            })}
        </div>
        <h2>Create new room:</h2>
        <div className={'add-new-room-actions-wrapper'}>
            <input className={'add-new-room-input'} value={roomInputValue || ''} onChange={(e) => {
                setRoomInputValue(e.target.value);

            }}  />
            {!isValidRoomName && <div className={'error-message-validation'}>Field is required</div>}
            <button className='add-new-room-button' onClick={() =>{
                // console.log(setSelectedRoom, 'setSelectedRoom');
                if (roomInputValue) {
                    setSelectedRoom(roomInputValue);
                    history.push(`/random/${roomInputValue}`);
                    setIsValidRoomName(true);
                } else {
                    setIsValidRoomName(false);
                }


            }}>
                Create
            </button>
        </div>
    </div>;
}

export default Rooms;
