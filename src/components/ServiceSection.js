// Components
import React from "react";

// Custom Components
import { IconContext } from "react-icons";
import { FiClock } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { RiCameraLensFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import home2 from "../img/home2.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImageDiv,
} from "../Styles";
import styled from "styled-components";

// Function
function ServiceSection() {
  return (
    <StyledService>
      <StyledDescription>
        <h2>
          high <span>quality</span> services
        </h2>
        <StyledCards>
          <IconContext.Provider
            value={{
              color: "#23d997",
              size: "40px",
              className: "global-class-name",
            }}
          >
            <StyledCard>
              <div className="icon">
                <FiClock />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <GiMoneyStack />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <RiCameraLensFill />
                <h3>Pro grade Gear</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
            <StyledCard>
              <div className="icon">
                <BsPeople />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </StyledCard>
          </IconContext.Provider>
        </StyledCards>
      </StyledDescription>
      <StyledImageDiv>
        <img src={home2} alt="another guy with cam"></img>
      </StyledImageDiv>
    </StyledService>
  );
}
const StyledService = styled(StyledAbout)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  // width: 50%;

  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 15rem; // 20
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: black;
      background: white;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
