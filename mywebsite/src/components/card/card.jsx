import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 250px;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
`;

export function CardView(props) {
  return <Container>
      Card
  </Container>;
}
