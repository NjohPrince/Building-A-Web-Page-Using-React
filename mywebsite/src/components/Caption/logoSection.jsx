import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/pong.png";
import { AnimationWrapper } from "react-hover-animation";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImg = styled.img`
  width: 91px;
  margin-top: 8em;
  align-self: center;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.div`
  margin-top: 6px;
  font-size: 32px;
  color: white;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 29px;
  }
`;

export function LogoAndContent(props) {
  return (
    <ContentWrapper>
      <LogoImg
        src={logo}
        style={{ animation: `spin 5s linear infinite` }}
      />
      <Text>Learn Web-Development</Text>
      <Text>Strawby's Great Deals</Text>
      <AnimationWrapper
        className="animation-wrapper"
        style={{
          textAlign: "center",
          borderRadius: "75px",
          cursor: "pointer",
          margin: "25px",
          width: "145px",
          alignSelf: "center",
          fontSize: "11px",
        }}
        config={{
          border: {
            initial: "2px solid white",
            onHover: "2px solid black",
          },
          color: {
            initial: "yellow",
            onHover: "black",
          },
          backgroundColor: {
            initial: "black",
            onHover: "yellow",
          },
        }}
      >
      <h1 className="btn">Get Started</h1>
      </AnimationWrapper>
    </ContentWrapper>
  );
}