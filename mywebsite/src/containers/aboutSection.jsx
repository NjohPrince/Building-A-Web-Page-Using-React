import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SingleRow } from "../components/row/content";
import { CaptionText } from "../components/textCaption/caption";
import rowImage from "../assets/images/cont.jfif";

const Container = styled(Element)`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function AboutSection(props) {
  return (
    <Container name="AboutSection">
      <CaptionText>About Me</CaptionText>
      <SingleRow
        name="Learn and Grow Together"
        descript="Just a CodeLover, who helps others acquire such skills too"
        imgURL={rowImage}
      />
    </Container>
  );
}
