import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import milliun from "../../assets/images/milliun.svg";
import bankrespublika from "../../assets/images/bankrespublika.svg";
import emanat from "../../assets/images/emanat.svg";
import azersigorta from "../../assets/images/azersigorta.svg";
import azerpoct from "../../assets/images/azerpoct.svg";
import "./style.scss";
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-left-arrow">
      <GoArrowLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-right-arrow">
      <GoArrowRight />
    </button>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 360 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
  },
};

const SimpleSlider = () => (
  <Carousel
    responsive={responsive}
    infinite={true}
    customLeftArrow={<CustomLeftArrow />}
    customRightArrow={<CustomRightArrow />}
  >
    <div className="item">
      <img src={milliun} alt="milliun" />
    </div>
    <div className="item">
      <img src={bankrespublika} alt="bankrespublika" />
    </div>
    <div className="item">
      <img src={emanat} alt="emanat" />
    </div>
    <div className="item">
      <img src={azersigorta} alt="azersigorta" />
    </div>
    <div className="item">
      <img src={azerpoct} alt="azerpoct" />
    </div>
  </Carousel>
);

export default SimpleSlider;
