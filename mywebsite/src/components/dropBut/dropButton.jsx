import React from "react";
import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowContainer = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.87);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 255ms ease-in-out;
  margin-top: 25px;

  &:hover {
    border: 2px solid yellow;
  }
`;

const ArrowIcon = styled.div`
  color: yellow;
  font-size: 22px;
`;

export function ScrollDown(props) {
  return (
    <ArrowContainer>
      <ArrowIcon>
          <FontAwesomeIcon icon = { faAngleDown } />
      </ArrowIcon>
    </ArrowContainer>
  );
}
