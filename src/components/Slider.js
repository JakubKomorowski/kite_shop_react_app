import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import React from "react";
import image1 from "../assets/images/harness-1.jpg";

const Slider = () => {
  return (
    <AwesomeSlider>
      <div>
        <img src={image1} alt="kite" />
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
  );
};

export default Slider;
