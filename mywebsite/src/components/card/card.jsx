import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(17, 17, 17, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 10px;
  border: 1px solid grey;
`;

const ContainerImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ImgDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const Name = styled.h2`
  color: #000;
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  border-bottom: 1px solid grey;
`;

const Description = styled.h6`
  color: gray;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;


export function CardView(props) {
  const { imgURL, name, descript } = props;
  return (
    <Container>
      <ContainerImg src={imgURL} />
      <ImgDescription>
        <Name>{name}</Name>
        <Description>{descript}</Description>
      </ImgDescription>
    </Container>
  );
}