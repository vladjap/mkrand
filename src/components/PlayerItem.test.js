import { render, screen } from '@testing-library/react';
import PlayerItem from "./PlayerItem";
import {PlayersData} from "../assets/data"
import ShangTsungImage from '../assets/ShangTsung.png';

test('renders learn react link', () => {
    render( <PlayerItem
        name={PlayersData[0].name}
        img={ShangTsungImage}
        isPlayer1={true}
        isPlayer2={false}
    />);
    const linkElement = screen.getByAltText("Shang Tsung");
    expect(linkElement).toBeInTheDocument();
});
