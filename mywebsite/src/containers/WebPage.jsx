import React from 'react';
import styled from 'styled-components';
import { AboutSection } from './aboutSection';
import { FooterSection } from './footer';
import { SectionUp } from './LandingPageContent';
import { SectionSlide } from './simpleReactCarousel';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function LandingPage(props){
    return ( 
    <HomeContainer>
      <SectionUp />
      <AboutSection />
      <SectionSlide />
      <FooterSection />
    </HomeContainer>
    );
}