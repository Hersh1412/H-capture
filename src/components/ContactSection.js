// Components
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// Custom Components
import contact from "../img/contact.jpg";
import { photoAnim, contpic, titleAnim } from "../animation";
// Function
const ContactSection = () => {
  return (
    <div style={{ background: "white" }}>
      <StyledImg>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={contact}
          alt="secondry Img"
        />
        <StyledHide>
          <motion.h2 variants={titleAnim} initial="hidden" animate="show">
            Get In Touch
          </motion.h2>
        </StyledHide>
      </StyledImg>
    </div>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;
const StyledImg = styled.div`
  min-height: 50vh;
  overflow: hidden;
  background: white;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  h2 {
    font-family: "Josefin Sans", sans-serif;
    position: absolute;
    top: 40%;
    left: 15%;

    transform: translate(-50%, -50%);
  }
`;

export default ContactSection;
