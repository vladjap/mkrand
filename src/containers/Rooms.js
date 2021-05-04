import React from 'react';
import { useHistory } from "react-router-dom";
// import {socket} from "../socketConfig";

//joinOrCreateAndJoinRoom

const Rooms = ({ selectedRoom, setSelectedRoom, roomInputValue, setRoomInputValue }) => {
    console.log(roomInputValue, 'roomInputValue');
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

    const history = useHistory();

    return <div>
        {selectedRoom && <div>{selectedRoom}</div>}
        <input value={roomInputValue || ''} onChange={(e) => setRoomInputValue(e.target.value)}  />
        <button onClick={() =>{
            console.log(setSelectedRoom, 'setSelectedRoom');
            setSelectedRoom(roomInputValue);
            history.push(`/random/${roomInputValue}`);
        }}>
            da
        </button>
    </div>;
}

export default Rooms;
