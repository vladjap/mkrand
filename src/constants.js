import {IS_LOCALHOST} from "./utils";

export const API_URL = IS_LOCALHOST ? 'http://localhost:3000' : 'http://144.217.30.147:3000';
export const GET_ROOM_DATA_ENDPOINT = '/api/rooms/'; // requires name param (room name)
