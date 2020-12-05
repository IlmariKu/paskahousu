import * as React from "react";
import "./index.css";
import { Card } from "./Card";

export default () => (
    <>
      <Card suit="spade" number="10"/>
      <Card suit="heart" number="5"/>
      <Card suit="diamond" number="3"/>
      <Card suit="club" number="7"/>
    </>
  );
