// Components
import React from "react";
import { motion } from "framer-motion";
// Custom Components
import home1 from "../img/home1.png";
import { titleAnim, fade, photoAnim } from "../animation";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImageDiv,
} from "../Styles";
// Function
const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or vediograpy ideas that you have. we
          would glady be intrested in your idea
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImageDiv>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with cam"
        ></motion.img>
      </StyledImageDiv>
    </StyledAbout>
  );
};

// styled component

export default AboutSection;
