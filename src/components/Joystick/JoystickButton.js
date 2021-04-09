import React from 'react';

import circleButton from '../../assets/psbuttons/circle.png';
import squareButton from '../../assets/psbuttons/square.png';
import crossButton from '../../assets/psbuttons/cross.png';
import triangleButton from '../../assets/psbuttons/triangle.png';

import leftButton from '../../assets/psbuttons/left.png';
import rightButton from '../../assets/psbuttons/right.png';
import upButton from '../../assets/psbuttons/up.png';
import downButton from '../../assets/psbuttons/down.png';
import { joystick } from "../../utils";

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

const JoystickButton = ({ type }) => {
    console.log(type, 'typetypetype');
    let buttonImage = null
    if (type === BTN_CIRCLE) { // krug
        buttonImage = circleButton;
    } else if (type === BTN_SQUARE) { // kocka
        buttonImage = squareButton;
    } else if (type === BTN_TRIANGLE) { // trougao
        buttonImage = triangleButton;
    } else if (type === BTN_CROSS) { // iks
        buttonImage = crossButton;
    } else if (type === BTN_LEFT) { // levo
        buttonImage = leftButton;
    } else if (type === BTN_RIGHT) { // desno
        buttonImage = rightButton;
    } else if (type === BTN_UP) { // gore
        buttonImage = upButton;
    } else if (type === BTN_DOWN) { // dole
        buttonImage = downButton;
    }
    return <img src={buttonImage} alt='button' />;
}

export default JoystickButton;
