// Components
import React from "react";
import { motion } from "framer-motion";

// Custom Components
import { pageAnimation } from "../animation";

// Function
const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
