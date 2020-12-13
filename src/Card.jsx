import React from "react";
import styled from "styled-components";

const suits = {
  diamond: "♦",
  spade: "♠",
  heart: "♥",
  club: "♣",
};

export function Card(props) {
  return (
    <CardArea faceDown={props.faceDown} suit={props.suit}>
      <div>
        <CardNumber>{props.number}</CardNumber>
        <SuitIcon>{suits[props.suit]}</SuitIcon>
      </div>
      <MidSuitIcon>{suits[props.suit]}</MidSuitIcon>
      <BottomNumber>
        <CardNumber>{props.number}</CardNumber>
        <SuitIcon>{suits[props.suit]}</SuitIcon>
      </BottomNumber>
    </CardArea>
  );
}

const MidSuitIcon = styled.div`
  font-size: 5em;
  margin: 0 auto;
`;

const SuitIcon = styled.div`
  font-size: ${(props) => (props.large ? "4em" : "1.5em")};
`;

const CardNumber = styled.div`
  font-size: ${(props) => (props.large ? "4em" : "2em")};
`;

const BottomNumber = styled.div`
  text-align: right;
`;

const CardArea = styled.div`
  display: flex;
  padding: 0.5em;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) =>
    props.suit == "heart" || props.suit == "diamond" ? "red" : "black"};
  height: 240px;
  width: 150px;
  background: ${(props) =>
    props.faceDown ? "linear-gradient(orange, yellow)" : "white"};
  border-radius: 20px;
  border: ${(props) => (props.faceDown ? "solid 2px" : "")};
`;
