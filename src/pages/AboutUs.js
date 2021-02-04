// Components
import React from "react";

// Custom Components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";

// Function
function AboutUs() {
  return (
    <div>
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </div>
  );
}

export default AboutUs;
