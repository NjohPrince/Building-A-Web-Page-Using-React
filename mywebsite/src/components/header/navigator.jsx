import React from "react";
import styled from "styled-components";
import { Navlink } from "../links/Navlink";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 4px;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

const Name = styled.div`
  color: yellow;
  font-size: 25px;
  font-weight: bold;
  align-self: center;
  margin-left: 11px;
`;

const MenuItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
`;


export function Navigation(props) {
  return (
    <Container>
      <Name>Strawby</Name>
      <MenuItems>
        <Navlink>Home</Navlink>
        <Navlink>Services</Navlink>
        <Navlink>Contact</Navlink>
      </MenuItems>
    </Container>
  );
}
