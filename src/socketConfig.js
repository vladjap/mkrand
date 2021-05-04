import socketIOClient from "socket.io-client";
const IS_LOCALHOST = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const ENDPOINT = IS_LOCALHOST ? "http://localhost:3000" : "http://144.217.30.147";
export const socket = socketIOClient(ENDPOINT);

