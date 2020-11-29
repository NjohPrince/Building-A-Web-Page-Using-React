import React from "react";
import styled from "styled-components";

const Container = styled.li`
  color: white;
  font-size: 15px;
  padding: 9px;
  text-align: center;
  transition: .6s;
  margin-right: 11px;

  &: hover {
    transition: .3s;
    color: black;
    background-color: yellow;
  }
`;

export function Navlink(props) {
  return (
    <a href="" style={{textDecoration: 'none'}}>
      <Container>{props.children}</Container>
    </a>
  );
}
