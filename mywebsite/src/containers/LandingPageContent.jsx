import React from "react";
import styled from "styled-components";
import BackgroundImg from "../assets/images/img.png";
import { Navigation } from "../components/header/navigator";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
`;

const FilterBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(55, 55, 55, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function SectionUp(props) {
  return (
    <Container>
      <FilterBackground>
        <Navigation />
      </FilterBackground>
    </Container>
  );
}
