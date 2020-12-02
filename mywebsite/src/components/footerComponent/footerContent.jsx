import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
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
