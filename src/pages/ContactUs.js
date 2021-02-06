// Components
import React from "react";
import { motion } from "framer-motion";

// Custom Components
import ScrollTop from "../components/ScrollTop";
import { pageAnimation, titleAnim, photoAnim } from "../animation";
import styled from "styled-components";

import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { IconContext } from "react-icons";
import ContactSection from "../components/ContactSection";

import contact from "../img/contact.jpg";

// Function
const ContactUs = () => {
  return (
    <StyledDiv>
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

      <StyledContact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: "#fff" }}
      >
        <StyledTitle></StyledTitle>
        <div>
          <IconContext.Provider
            value={{
              color: "#23d997",
              size: "20px",
              className: "global-class-name",
            }}
          >
            <StyledHide>
              <StyledSocial variants={titleAnim}>
                <StyledCircle className="icon">
                  <BiPhoneCall />
                </StyledCircle>
                <h2>Send us a Call </h2>
              </StyledSocial>
            </StyledHide>

            <StyledHide>
              <StyledSocial variants={titleAnim}>
                <StyledCircle className="icon">
                  <AiOutlineMail />
                </StyledCircle>
                <h2>Send an Email </h2>
              </StyledSocial>
            </StyledHide>

            <StyledHide>
              <StyledSocial variants={titleAnim}>
                <StyledCircle className="icon">
                  <AiOutlineInstagram />
                </StyledCircle>
                <h2>Social Media </h2>
              </StyledSocial>
            </StyledHide>
          </IconContext.Provider>
        </div>
        <ScrollTop />
      </StyledContact>
    </StyledDiv>
  );
};
const StyledContact = styled(motion.div)`
  padding: 4rem 7rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const StyledHide = styled.div`
  overflow: hidden;
`;
const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #353535;
`;
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
  }
`;
const StyledDiv = styled.div`
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

export default ContactUs;
