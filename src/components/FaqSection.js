// Components
import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

// Custom Components
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImageDiv,
} from "../Styles";
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
import { scrollRevel, fade } from "../animation";
// Function
const FaqSection = () => {
  const [element, controls] = useScroll(0.3);
  return (
    <StyledFaq
      variants={scrollRevel}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do i start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              distinctio!
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily scheduel">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              distinctio!
            </p>
          </div>
        </Toggle>

        <Toggle title="Diffrent payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              distinctio!
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              distinctio!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};
const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 3rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
