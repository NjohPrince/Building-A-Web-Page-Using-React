import React from "react";
import styled from "styled-components";
import { FooterContent } from "../components/footerComponent/footerContent";

const Container = styled.div`
  width: 100%;
  background-color: black;
  min-height: 230px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const CopyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid gray;
  width: 100%;
`;

const CopywriteMessage = styled.h6`
  color: gray;
`;

export function FooterSection(props) {
  return (
    <Container>
      <FooterContent header="Company" description="Strawby-Geek" />
      <FooterContent
        header="Small Biography"
        description="Some Experience with Programming Languages: 'Java, C/C++, Python', Web-Developer: 'HTML/CSS/JavaScript, Reactjs, NODEjs, PHP'"
      />
      <FooterContent header="Location" description="Molyko, Buea, CAMEROON" />
      <CopyContainer>
        <CopywriteMessage>
          strawby-designs | copywrite &copy; 2020
        </CopywriteMessage>
      </CopyContainer>
    </Container>
  );
}
