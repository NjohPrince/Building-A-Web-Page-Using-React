import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SingleRow } from "../components/row/content";
import { CaptionText } from "../components/textCaption/caption";
import rowImage from "../assets/images/cont.jfif";

const Container = styled(Element)`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 755px) {
    height: 600px;
  }
`;

export function AboutSection(props) {
  return (
    <Container name="AboutSection">
      <CaptionText>About Me</CaptionText>
      <SingleRow
        name="#CodeLover"
        descript="Just a CodeLover, who helps others acquire such skills too"
        name2="#ProgrammingGeek"
        imgURL={rowImage}
      />
    </Container>
  );
}
