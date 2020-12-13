import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const suits = {
  diamond: "♦",
  spade: "♠",
  heart: "♥",
  club: "♣",
};

export function Card(props) {
  return (
    <motion.div
      initial={false}>
    <CardArea faceDown={props.faceDown} turn90={props.turn90} suit={props.suit}>
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
    </motion.div>
  );
}

const MidSuitIcon = styled.div`
  font-size: 4.5em;
  margin: 0 auto;
`;

const SuitIcon = styled.div`
  font-size: ${(props) => (props.large ? "3.5em" : "1.4em")};
`;

const CardNumber = styled.div`
  font-size: ${(props) => (props.large ? "3.5em" : "1.8em")};
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
  height: ${(props) => props.turn90 ? "135px" : "216px"};
  width: ${(props) => props.turn90 ? "216px" : "135px"};
  background: ${(props) =>
    props.faceDown ? "linear-gradient(orange, yellow)" : "white"};
  border-radius: 20px;
  border: ${(props) => (props.faceDown ? "solid 2px" : "")};
`;
