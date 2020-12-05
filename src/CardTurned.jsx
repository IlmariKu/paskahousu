import React from 'react';
import styled from "styled-components";

export function CardTurned(props) {
    return (
        <CardArea>

        </CardArea>
    );
}


const CardArea = styled.div`
  color: ${(props) =>
    props.suit == "heart" || props.suit == "diamond" ? "red" : "black"};
  height: 320px;
  width: 200px;
  background: linear-gradient(
      orange,
      yellow
  );
  border: 2px solid black;
  border-radius: 25px;
`;
