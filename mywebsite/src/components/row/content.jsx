import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerImg = styled.img`
  width: 22em;
  height: 18em;
`;

const ImgDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
`;

const Name = styled.h2`
  color: #000;
  font-size: 27px;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.h6`
  color: gray;
  font-size: 20px;
  font-weight: bold
`;

export function SingleRow(props) {
  const { name, descript, imgURL } = props;
  return (
    <Container>
      <ImgDescription>
        <Name>{name}</Name>
        <Description>{descript}</Description>
      </ImgDescription>
      <ContainerImg src={imgURL} />
    </Container>
  );
}
