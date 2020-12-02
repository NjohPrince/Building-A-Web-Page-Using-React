import React from "react";
import styled from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import { CaptionText } from "../components/textCaption/caption";
import { CardView } from "../components/card/card";
import rowImage from "../assets/images/cont.jfif";
import rowImage2 from "../assets/images/images.png";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  width: 100%;
  min-height: 499px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 80%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;

  button {
    height: 5px;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    border: 1px solid gray;

    &:not(:last-of-type) {
      margin-right: 5px;
    }
  }
  .carousel__dot--selected {
    background-color: yellow;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 998px) {
      height: 2px;
    }
  }
`;

export function SectionSlide(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 799px)" });
  return (
    <Container>
      <CaptionText>Services I Offer</CaptionText>
      <StyledCarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={250}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={isMobile ? true : false}
      >
        <Slider>
          <StyledSlide index={0}>
            <CardView
              imgURL={rowImage2}
              name="Front-End"
              descript="HTML5, CSS3, JAVASCRIPT(Vanilla, JQuery), REACTjs"
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <CardView
              imgURL={rowImage}
              name="Back-End"
              descript="NODEjs, PHP"
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <CardView
              imgURL={rowImage}
              name="SEO"
              descript="Search Engine Optimisation with Ease"
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <CardView
              imgURL={rowImage}
              name="Management Systems"
              descript="Design and Build of Softwares for Managing your Systems: Shopping, Business, including Adverts"
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </Container>
  );
}
