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


  @media screen and (max-width: 1177px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 942px) {
    margin-bottom: 185px;
  }
`;

export function AboutSection(props) {
  return (
    <Container name="AboutSection">
      <CaptionText>About Me</CaptionText>
      <SingleRow
        name="#CodeLover"
        descript="Just a CodeLover, who helps others acquire such skills too, Proficient at Algorithm development, Skillfull arts, graphics and sketches "
        name2="#ProgrammingGeek"
        imgURL={rowImage}
      />
    </Container>
  );
}
