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
    <CardArea suit={props.suit}>
      <TopNumber>
        <CardNumber>{props.number}</CardNumber>
        <SuitIcon>{suits[props.suit]}</SuitIcon>
      </TopNumber>
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

const TopNumber = styled.div`

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
  height: 320px;
  width: 200px;
  background-color: white;
  border-radius: 25px;
`;
