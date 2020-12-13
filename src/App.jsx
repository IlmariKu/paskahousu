import * as React from "react";
import "./index.css";
import { Card } from "./Card";
import styled from "styled-components";

export default () => (
    <>
    <div style={{"height": "5vh"}}></div>
    <Cards>
      <Card suit="spade" number="10"/>
      <Card suit="heart" number="5"/>
      <Card suit="diamond" number="3"/>
      <Card suit="club" number="7"/>
      <Card suit="club" number="9"/>
      </Cards>
    </>
  );

const Cards = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  margin-left: 20vw;
  bottom: 5vh;
`;
