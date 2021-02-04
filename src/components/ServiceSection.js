// Components
import React from "react";

// Custom Components
import { IconContext } from "react-icons";
import { FiClock } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { RiCameraLensFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import home2 from "../img/home2.jpg";

// Function
function ServiceSection() {
  return (
    <div className="services">
      <div className="description">
        <h1>
          high <span>quality</span> services
        </h1>
        <IconContext.Provider
          value={{
            color: "blue",
            size: "30px",
            className: "global-class-name",
          }}
        >
          <div className="cards">
            <div className="card">
              <div className="icon">
                <FiClock />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <GiMoneyStack />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <RiCameraLensFill />
                <h3>Pro grade Gear</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <BsPeople />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <div className="image">
        <img src={home2} alt="another guy with cam"></img>
      </div>
    </div>
  );
}

export default ServiceSection;
