import React from 'react'
import Carousel from "react-multi-carousel";
import slider1 from "../../assets/images/slider1.svg";
import coin1 from "../../assets/images/coin1.png";
import dollar from "../../assets/images/dollar.png";
import slider2 from "../../assets/images/slider2.png";
import flyingCurrency from "../../assets/images/flyingCurrency.png";
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import "./style.scss"

const index = () => {
    const CustomLeftArrow = ({ onClick }) => {
        return (
          <button onClick={onClick} className="custom-left-arrow-heading">
            <GoArrowLeft />
          </button>
        );
      };
      
      const CustomRightArrow = ({ onClick }) => {
        return (
          <button onClick={onClick} className="custom-right-arrow-heading">
            <GoArrowRight />
          </button>
        );
      };
      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 360 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 360, min: 0 },
          items: 1,
        },
      };
  return (
    <Carousel
    responsive={responsive}
    infinite={true}
    customLeftArrow={<CustomLeftArrow />}
    customRightArrow={<CustomRightArrow />}
    className="mySwiper"
    >
           <div>
          <div className="first-part">
            <h2>Lombard krediti</h2>
            <div className="prices">
              <div>
                <span>500 AZN üçün </span>
                <h3>25 AZN</h3>
              </div>
              <div>
                <span>100 AZN üçün </span>
                <h3>50 AZN</h3>
              </div>
              <div>
                <span>2000 AZN üçün </span>
                <h3>99 AZN ödə</h3>
              </div>
            </div>

            <button>Sifariş et</button>
          </div>
          <div className="second-part">
            <img src={slider1} alt="slider1" className="slider1" />
            <img src={coin1} alt="coin1" className="coin1"/>
            <img src={coin1} alt="slider" className="slider"/>
          </div>
        </div>
        <div>
          <div className="first-part">
            <h2>Təcili pul lazımdır?</h2>
            <p>Lombard krediti əldə et </p>
            <button> Sifariş et </button>
          </div>
          <div className="second-part">
            <img src={dollar} alt="dollar" className="dollar"/>
            <img src={slider2} alt="dollar" className="businessman" />
            <img src={flyingCurrency} alt="dollar"  className="dollar2"/>
          </div>
        </div>
    </Carousel>
  )
}

export default index