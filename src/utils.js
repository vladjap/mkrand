import { PlayersData } from './assets/data';
import { random, head } from 'lodash';

export const getRandomPlayer = () => {
    const avPlayerIds = PlayersData.filter(player => player?.available).map(player => player?.id);
    return avPlayerIds[random(0, avPlayerIds.length - 1)];
}

export const getPlayerById = (id) => {
    if (!id) {
        return null;
    }
    const playerArray = PlayersData.filter(player => player?.id === id);
    if (!playerArray || playerArray.length === 0) {
        return null;
    }
    return head(playerArray);
}

export const joystick = {
    BTN_CROSS: 'BTN_CROSS',
    BTN_CIRCLE: 'BTN_CIRCLE',
    BTN_TRIANGLE: 'BTN_TRIANGLE',
    BTN_SQUARE: 'BTN_SQUARE',
    BTN_LEFT: 'BTN_LEFT',
    BTN_RIGHT: 'BTN_RIGHT',
    BTN_UP: 'BTN_UP',
    BTN_DOWN: 'BTN_DOWN',
    BTN_R1: 'BTN_R1',
    BTN_R2: 'BTN_R2',
    BTN_L1: 'BTN_L1',
    BTN_L2: 'BTN_L2',
};

export const IS_LOCALHOST = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
