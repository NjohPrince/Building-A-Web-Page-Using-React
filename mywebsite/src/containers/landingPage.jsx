import React from 'react';
import styled from 'styled-components';
import { SectionUp } from './LandingPageContent';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function LandingPage(props){
    return ( 
    <HomeContainer>
      <h1>New React Project</h1>
    </HomeContainer>
    );
}