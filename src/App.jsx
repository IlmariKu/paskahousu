import * as React from "react";
import "./index.css";
import { Card } from "./Card";
import { CardTurned } from "./CardTurned";
import styled from "styled-components";

export default () => (
    <>
    <Cards>
      <Card suit="spade" number="10"/>
      <Card suit="heart" number="5"/>
      <Card suit="diamond" number="3"/>
      <Card suit="club" number="7"/>
      <CardTurned />
      </Cards>
    </>
  );

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10vw;
  margin-top: 10vh;
  flex-wrap: wrap;
`;
