// Components
import React from "react";
import styled from "styled-components";
// Custom Components
import home1 from "../img/home1.jpg";

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

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 7rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 3rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImageDiv = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
