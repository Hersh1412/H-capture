// Components
import React from "react";

// Custom Components
import home1 from "../img/home1.jpg";
// Function
function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
          <img src={home1} alt="guy with cam"></img>
        </div>
        <p>
          Contact us for any photography or vediograpy ideas that you have. we
          would glady be intrested in your idea
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default AboutSection;
