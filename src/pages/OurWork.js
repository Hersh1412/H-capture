// Components
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Custom Components
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// Function
function OurWork() {
  return (
    <StyledWork>
      <StyledMovie>
        <h1>The Athlete</h1>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h1>The Racer</h1>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="the racer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h1>Good Times</h1>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
}

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
