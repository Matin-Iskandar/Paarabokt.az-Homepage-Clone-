import React, { useEffect, useState } from "react";
import "./style.scss";
import moneyBag from "../../assets/icons/moneyBag.svg";
import userInfo from "../../assets/icons/userInfo.svg";
import coinCredit from "../../assets/icons/coinCredit.svg";
import goldsCredit from "../../assets/icons/goldsCredit.svg";
import blackWallet from "../../assets/images/blackWallet.png";
import goldBar from "../../assets/images/goldBar.png";
import LastNews from "../../components/LastNews";
import Carousel from "../../components/Carousel";
import CarouselForHeading from "../../components/CarouselForHeading"
const homePage = () => {
  const [isGold, setIsGold] = useState(false);
  const [sliderValue, setSliderValue] = useState(1);
  const [sliderMonthValue, setSliderMonthValue] = useState(12);
  const valueOfGoldOne = 41;
  const valueOfGoldSecando = 64;
  const valueOfGoldThird = 82;
  const valueOfGoldFour = 96;
  const valueOfGoldFive = 100;
  const valueOfGoldSix = 109;
  const [weightGold, setWeightGold] = useState();
  const [goldAmount, setGoldAmount] = useState(2000);
  const [goldAmountWithPercenct, setGoldAmountWithPercenct] = useState(2000);
  const handleGoldClick = () => {
    setIsGold(!isGold);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleSliderChangeMonth = (e) => {
    setSliderMonthValue(e.target.value);
  };

  useEffect(() => {
    switch (weightGold) {
      case 41:
        setGoldAmount(valueOfGoldOne * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldOne * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
      case 64:
        setGoldAmount(valueOfGoldSecando * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldSecando * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
      case 82:
        setGoldAmount(valueOfGoldThird * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldThird * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
      case 96:
        setGoldAmount(valueOfGoldFour * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldFour * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
      case 100:
        setGoldAmount(valueOfGoldFive * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldFive * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
      case 109:
        setGoldAmount(valueOfGoldSix * sliderValue);
        setGoldAmountWithPercenct(
          parseFloat(
            (
              (valueOfGoldSix * sliderValue * 1.0152) /
              sliderMonthValue
            ).toFixed(2)
          )
        );
        break;
    }
  }, [sliderValue, sliderMonthValue, weightGold]);

  return (
    <div className="home-page">
      <CarouselForHeading />
      <main>
        <section className="credit-methods">
          <div className="credit">
            <div>
              <img src={moneyBag} alt="moneyBag" />
            </div>
            <p>Aylıq 1,4%-dən başlayan kredit </p>
          </div>
          <div className="credit">
            <div>
              <img src={coinCredit} alt="coinCredit" />
            </div>
            <p>200%-ə dəyərləndirmə</p>
          </div>
          <div className="credit">
            <div>
              <img src={userInfo} alt="userInfo" />
            </div>
            <p>Zaminsiz tək şəxsiyyət vəsiqəsi ilə</p>
          </div>
          <div className="credit">
            <div>
              <img src={goldsCredit} alt="goldsCredit" />
            </div>
            <p>Qızılın lombarddan çıxarılması</p>
          </div>
        </section>
        <div className="calculator">
          <div className="btns-home-page">
            <button
              className={isGold ? "for-gold" : " dark-mode"}
              onClick={handleGoldClick}
            >
              Qızılın əyarına görə
            </button>
            <button
              className={isGold ? " dark-mode-amount" : "for-amount"}
              onClick={handleGoldClick}
            >
              Məbləğə görə
            </button>
          </div>
          <div className="calculator-main">
            <div className="for-gold-part">
              <div className="weight-of-gold">
                <h2>Kredit kalkulyatoru</h2>
                <h3>Qızılın əyarı</h3>
                <div className="gram-btns">
                  <button
                    onClick={() => setWeightGold(41)}
                    className="gram-btn"
                  >
                    375
                  </button>
                  <button
                    onClick={() => setWeightGold(64)}
                    className="gram-btn"
                  >
                    583
                  </button>
                  <button
                    onClick={() => setWeightGold(82)}
                    className="gram-btn"
                  >
                    750
                  </button>
                  <button
                    onClick={() => setWeightGold(96)}
                    className="gram-btn"
                  >
                    875
                  </button>
                  <button
                    onClick={() => setWeightGold(100)}
                    className="gram-btn"
                  >
                    916
                  </button>
                  <button
                    onClick={() => setWeightGold(109)}
                    className="gram-btn"
                  >
                    999
                  </button>
                </div>
              </div>
              <div className="gramofgold">
                <section className="input-ranges">
                  <h2>Qızılın qramı</h2>
                  <div className="slider-container">
                    <input
                      className="number-input"
                      type="number"
                      min="0"
                      max="1000"
                      step={1}
                      value={sliderValue}
                      onChange={handleSliderChange}
                      disabled
                    />
                    <span className="q">q</span>
                    <input
                      className="number-input2"
                      type="range"
                      min="0"
                      max="1000"
                      step={1}
                      value={sliderValue}
                      onChange={handleSliderChange}
                    />
                  </div>
                </section>{" "}
                <section className="input-ranges">
                  <h2>Kreditin müddəti</h2>
                  <div className="slider-container-month">
                    <input
                      className="number-input"
                      type="number"
                      min="1"
                      max="36"
                      step={1}
                      value={sliderMonthValue}
                      onChange={handleSliderChangeMonth}
                      disabled
                    />
                    <span className="month">ay</span>
                    <input
                      className="number-input2"
                      type="range"
                      min="1"
                      max="36"
                      step={1}
                      value={sliderMonthValue}
                      onChange={handleSliderChangeMonth}
                    />
                  </div>{" "}
                </section>{" "}
              </div>
              <button className="add-to-credit">+ Digər qızılı əlavə et</button>
            </div>
            <div className="for-amount-part">
              <span className="for-amount-span">
                {" "}
                {isGold ? "Sizə ayrılan məbləğ" : "Lazım olan qızıl miqdarı"}
              </span>
              <span className="for-amount-secando-span">Aylıq ödəniş</span>

              <div className="amount">
                <section className="input-box">
                  <input
                    className="number-input-amount"
                    type="number"
                    min=""
                    max=""
                    step={1}
                    value={goldAmount}
                    onChange={handleSliderChange}
                    disabled
                  />
                  <p>AZN</p>
                </section>
                <hr />
                <section className="input-box">
                  <input
                    className="number-input-amount"
                    type="number"
                    min=""
                    max=""
                    step={1}
                    value={goldAmountWithPercenct}
                    disabled
                  />
                  <p>AZN</p>
                </section>
                <button>Kredit sifariş et</button>
              </div>
            </div>
          </div>
        </div>
        <div className="advice">
          <div className="to-order">
            <section>

            <h2>Vaxt qızıldır</h2>
            <button>Sifariş et</button>
            </section>
            <img src={goldBar} alt="goldBar" />
          </div>
          <div className="move-on">
            <section > 
            <h2>Cəmi 30 dəqiqəyə sürətli kredit əldə et</h2>
            <button>Keçid et</button>
            </section>
            <img src={blackWallet} alt="blackWallet" />
          </div>
        </div>
        <LastNews />
        <Carousel />
      </main>
    </div>
  );
};

export default homePage;
