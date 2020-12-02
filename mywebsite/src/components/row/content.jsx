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
  flex: 1;
  height: 18em;

  @media screen and (max-width: 480px) {
    width: 100%;
    order: 1;
  }
`;

const ImgDescription = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    order: 2;
  }
`;

const Name = styled.h2`
  color: darkgray;
  text-align: center;
`;

const Description = styled.h5`
  color: gray;
  text-align: center;
  margin-left: 15px;
  margin-right: 15px;
`;

export function SingleRow(props) {
  const { name, descript, name2, imgURL } = props;
  return (
    <Container>
      <ImgDescription>
        <Name>{name}</Name>
        <Name>{name2}</Name>
        <Description>{descript}</Description>
      </ImgDescription>
      <ContainerImg src={imgURL} />
    </Container>
  );
}
