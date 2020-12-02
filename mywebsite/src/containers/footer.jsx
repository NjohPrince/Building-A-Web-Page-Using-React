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
      <FooterContent header="Usefull Links" description="testing" />
      <FooterContent header="Usefull Links" description="testing" />
      <FooterContent header="Usefull Links" description="testing" />
    </Container>
  );
}
