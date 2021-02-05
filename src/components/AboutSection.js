// Components
import React from "react";
import styled from "styled-components";
// Custom Components
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImageDiv,
} from "../Styles";
// Function
function AboutSection() {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or vediograpy ideas that you have. we
          would glady be intrested in your idea
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImageDiv>
        <img src={home1} alt="guy with cam"></img>
      </StyledImageDiv>
    </StyledAbout>
  );
}

// styled component

export default AboutSection;
