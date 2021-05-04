import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Rand from "./containers/Rand";
import Rooms from "./containers/Rooms";



function App() {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [roomInputValue, setRoomInputValue] = useState(null);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/random/:roomName">
                        <Rand />
                    </Route>
                    <Route path="/">
                        <Rooms
                            selectedRoom={selectedRoom}
                            setSelectedRoom={setSelectedRoom}
                            roomInputValue={roomInputValue}
                            setRoomInputValue={setRoomInputValue}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
