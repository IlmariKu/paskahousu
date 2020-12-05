import React from 'react';
import styled from "styled-components";

const suits = {
    "diamond": "♦",
    "spade": "♠",
    "heart": "♥",
    "club": "♣"
}


export function Card(props) {

    return (
        <CardFace>
            {suits[props.suit]}
        </CardFace>
    );
}

const CardFace = styled.div`
    margin: 0 auto;
    margin-top: 30vh;
    height: 320px;
    width: 200px;
    background-color: white;
    border-radius: 25px;
`;
