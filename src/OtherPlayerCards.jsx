import React from 'react';
import styled from "styled-components";
import { Card } from "./Card";

export function OtherPlayerCards(props) {
    return (
        <PlayerArea>
            <Card faceDown turn90={props.turn90} />
            <Card faceDown turn90={props.turn90} />
            <Card faceDown turn90={props.turn90} />
            <Card faceDown turn90={props.turn90} />
            <Card faceDown turn90={props.turn90} />
        </PlayerArea>
    );
}

const PlayerArea = styled.div`
    display: flex;
    flex-direction: column;
`;
