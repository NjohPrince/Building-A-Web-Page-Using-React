import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 755px) {
    flex-direction: column;
  }
`;

const ContainerImg = styled.img`
  width: 22em;
  height: 18em;

  @media screen and (max-width: 480px) {
    width: 100%;
    order: 1;
  }
`;

const ImgDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  @media screen and (max-width: 480px) {
    order: 2;
  }
`;

const Name = styled.h2`
  color: black;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  border-bottom: 1px solid yellow;
`;

const Description = styled.h6`
  color: gray;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export function SingleRow(props) {
  const { name, descript, name2, imgURL } = props;
  return (
    <Container>
      <ImgDescription>
        <Name>{name}</Name>
        <Description>{descript}</Description>
        <Name>{name2}</Name>
      </ImgDescription>
      <ContainerImg src={imgURL} />
    </Container>
  );
}
