import React from "react";
import styled from "styled-components";
import { FooterContent } from "../components/footerComponent/footerContent";

const Container = styled.div`
  width: 100%;
  background-color: black;
  min-height: 300px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export function FooterSection(props) {
  return (
    <Container>
      <FooterContent header="Company" description="Strawby-Geek" />
      <FooterContent header="Small Biography" description="Some Experience with Programming Languages: 'Java, C/C++, Python', Web-Developer: 'HTML/CSS/JavaScript, Reactjs, PHP'" />
      <FooterContent header="Location" description="Molyko, Buea, CAMEROON" />
    </Container>
  );
}
