import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 1088px) {
    width: 25%;
  }

  @media screen and (max-width: 719px) {
    width: 95%;
    margin-top: 15px;
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
    &(last-of-type) {
      margin-bottom: 0px;
    }
  }
`;

const NameHead = styled.h3`
  color: white;
`;

const NameBody = styled.h5`
  color: white;
`;

export function FooterContent(props) {
  const { header, description } = props;
  return (
    <Container>
      <NameHead>{header}</NameHead>
      <NameBody>{description}</NameBody>
    </Container>
  );
}
