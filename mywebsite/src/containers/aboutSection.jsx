import React from 'react';
import { Element } from 'react-scroll'
import styled from 'styled-components';
import { CaptionText } from '../components/textCaption/caption';

const Container = styled( Element )`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function AboutSection(props){
    return <Container name="AboutSection">
        <CaptionText>About Me</CaptionText>
    </Container>;
}