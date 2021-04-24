import { joystick } from '../utils';

import ShangTsungImage from '../assets/ShangTsung.png';
import ShaoKahn from '../assets/ShaoKahn.png';
import Frost from '../assets/Frost.png';
import NightWolf from '../assets/NightWolf.png';
import Joker from '../assets/Joker.png';
import JohnnyCage from '../assets/JohhnyCage.png';
import Sonya from '../assets/Sonya.png';
import CassieCage from '../assets/CassieCage.png';
import Jax from '../assets/Jax_mk11.png';
import Spawn from '../assets/Spawn.png';
import Scorpion from '../assets/Scorpion.png';
import NoobSaibot from '../assets/Noob_Saibot_mk11.png';
import Baraka from '../assets/Baraka.png';
import Raiden from '../assets/Raiden.png';
import JacquiBriggs from '../assets/JacquiBriggs.png';
import SubZero from '../assets/SubZero.png';
import Kano from '../assets/Kano.png';
import Kabal from '../assets/Kabal.png';
import Liu_Kang from '../assets/Liu_Kang.png';
import Kitana from '../assets/Kitana.png';
import KungLao from '../assets/KungLao.png';
import Jade from '../assets/Jade.png';
import Robocop from '../assets/Robocop.png';
import Skarlet from '../assets/Skarlet.png';
import ErronBlack from '../assets/ErronBlack.png';
import Dvorah from '../assets/dvorah.png';
import KotalKahn from '../assets/KotalKahn.png';
import Sheeva from '../assets/Sheeva.png';
import Terminator from '../assets/Terminator.png';
import Geras from '../assets/Geras.png';
import Kollector from '../assets/Kollector.png';
import Sindel from '../assets/Sindel.png';
import Cetrion from '../assets/Cetrion.png';
import Fujin from '../assets/Fujin.png';
import Rambo from '../assets/rambo.png';


const {
    BTN_CIRCLE,
    BTN_CROSS,
    BTN_DOWN,
    BTN_L1,
    BTN_L2,
    BTN_LEFT,
    BTN_R1,
    BTN_R2,
    BTN_RIGHT,
    BTN_SQUARE,
    BTN_TRIANGLE,
    BTN_UP,
} = joystick;

export const PlayersData = [
    {
        id: 'shts',
        name: 'Shang Tsung',
        image: ShangTsungImage,
        available: true,
        kombos: [
            {
                name: 'test-1',
                moveList: [BTN_CROSS, BTN_LEFT, BTN_SQUARE, BTN_TRIANGLE],
            },
            {
                name: 'test-2',
                moveList: [BTN_CIRCLE, BTN_DOWN, BTN_UP, BTN_TRIANGLE],
            },
        ],
        specials: [
            {
                name: 'test-3',
                moveList: [BTN_CROSS, BTN_LEFT, BTN_SQUARE, BTN_TRIANGLE],
            },
            {
                name: 'test-4',
                moveList: [BTN_CIRCLE, BTN_DOWN, BTN_UP, BTN_TRIANGLE],
            },
        ],
    },
    {
        id: 'shka',
        name: 'Shao Kahn',
        image: ShaoKahn,
        available: true,
    },
    {
        id: 'frst',
        name: 'Frost',
        image: Frost,
        available: true,
    },
    {
        id: 'niwo',
        name: 'Night Wolf',
        image: NightWolf,
        available: true,
    },
    {
        id: 'jkr',
        name: 'Joker',
        image: Joker,
        available: true,
    },
    {
        id: 'jhca',
        name: 'Johnny Cage',
        image: JohnnyCage,
        available: true,
    },
    {
        id: 'sya',
        name: 'Sonya',
        image: Sonya,
        available: true,
    },
    {
        id: 'csscg',
        name: 'Cassie Cage',
        image: CassieCage,
        available: true,
    },
    {
        id: 'jx',
        name: 'Jax Briggs',
        image: Jax,
        available: true,
    },
    {
        id: 'spw',
        name: 'Spawn',
        image: Spawn,
        available: true,
    },
    {
        id: 'scrp',
        name: 'Scorpion',
        image: Scorpion,
        available: true,
    },
    {
        id: 'nbsab',
        name: 'Noob Saibot',
        image: NoobSaibot,
        available: true,
    },
    {
        id: 'brk',
        name: 'Baraka',
        image: Baraka,
        available: true,
    },
    {
        id: 'rdn',
        name: 'Raiden',
        image: Raiden,
        available: true,
    },
    {
        id: 'jqbgg',
        name: 'Jacqui Briggs',
        image: JacquiBriggs,
        available: true,
    },
    {
        id: 'sbzr',
        name: 'Sub Zero',
        image: SubZero,
        available: true,
    },
    {
        id: 'kn',
        name: 'Kano',
        image: Kano,
        available: true,
    },
    {
        id: 'kbl',
        name: 'Kabal',
        image: Kabal,
        available: true,
    },
    {
        id: 'likg',
        name: 'Liu Kang',
        image: Liu_Kang,
        available: true,
    },
    {
        id: 'ktn',
        name: 'Kitana',
        image: Kitana,
        available: true,
    },
    {
        id: 'knlo',
        name: 'KungLao',
        image: KungLao,
        available: true,
    },
    {
        id: 'jd',
        name: 'Jade',
        image: Jade,
        available: true,
    },
    {
        id: 'rbcp',
        name: "Robocop",
        image: Robocop,
        available: false,
    },
    {
        id: 'srlt',
        name: "Skarlet",
        image: Skarlet,
        available: true,
    },
    {
        id: 'erck',
        name: "Erron Black",
        image: ErronBlack,
        available: true,
    },
    {
        id: 'dvh',
        name: "D'vorah",
        image: Dvorah,
        available: true,
    },
    {
        id: 'kthn',
        name: 'Kotal Kahn',
        image: KotalKahn,
        available: true,
    },
    {
        id: 'shva',
        name: 'Sheeva',
        image: Sheeva,
        available: false,
    },
    {
        id: 'rmbo',
        name: 'Rambo',
        image: Rambo,
        available: true,
    },
    {
        id: 'trmnt',
        name: 'Terminator',
        image: Terminator,
        available: true,
    },
    {
        id: 'grs',
        name: 'Geras',
        image: Geras,
        available: true,
    },
    {
        id: 'klltr',
        name: 'Kollector',
        image: Kollector,
        available: true,
    },
    {
        id: 'sndl',
        name: 'Sindel',
        image: Sindel,
        available: true,
    },
    {
        id: 'ctrn',
        name: 'Cetrion',
        image: Cetrion,
        available: true,
    },
    {
        id: 'fjn',
        name: 'Fujin',
        image: Fujin,
        available: false,
    },
];
