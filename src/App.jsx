import * as React from "react";
import "./index.css";
import { Card } from "./Card";
import styled from "styled-components";
import { OtherPlayerCards } from "./OtherPlayerCards";

export default () => (
  <>
    <div style={{ height: "5vh" }}></div>
    <OppositePlayer>
        <Card faceDown />
        <Card faceDown />
        <Card faceDown />
        <Card faceDown />
        <Card faceDown />
    </OppositePlayer>
    <LeftPlayer>
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
    </LeftPlayer>
    <RightPlayer>
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
        <Card faceDown turn90={true} />
    </RightPlayer>
    <Cards>
      <Card suit="spade" number="10" />
      <Card suit="heart" number="5" />
      <Card suit="diamond" number="3" />
      <Card suit="club" number="7" />
      <Card suit="club" number="9" />
    </Cards>
  </>
);

const PlayerArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftPlayer = styled.div`
  position: absolute;
`;

const OppositePlayer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20vw;
`;

const RightPlayer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80vw;
`;

const Cards = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  margin-left: 20vw;
  bottom: 5vh;
`;
