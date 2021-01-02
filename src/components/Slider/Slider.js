import React from "react";
import kite_bg1 from "../../assets/images/kite-bg1.jpg";
import kite_bg2 from "../../assets/images/kite-bg2.jpg";
import kite_bg3 from "../../assets/images/kite-bg3.jpg";
import kite_bg4 from "../../assets/images/kite-bg4.jpg";
import { StyledAwesomeSlider } from "../styledComponents/StyledSlider";
import "./slider.scss";

const Slider = () => {
  return (
    <StyledAwesomeSlider>
      <div>
        <img src={kite_bg1} alt="kite" />
      </div>
      <div>
        <img src={kite_bg2} alt="kite" />
      </div>
      <div>
        <img src={kite_bg3} alt="kite" />
      </div>
      <div>
        <img src={kite_bg4} alt="kite" />
      </div>
    </StyledAwesomeSlider>
  );
};

export default Slider;
