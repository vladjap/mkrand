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
