import React from "react";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import news4 from "../../assets/images/news4.png";
import "./style.scss";
const lastNews = () => {
  return (
    <div className="last-news">
      <div className="heading">
        <h2>Son xəbərlər</h2> <a href="">Hamısına bax</a>
      </div>
      <section className="news">
        <div className="news-item">
          <img src={news1} alt="news1" />
          <p>12.11.2023</p>
          <h3>Global Bank Launches Cutting-Edge Digital Platform: A leading bank unveils a user-friendly digital platform, revolutionizing customer banking experience with advanced features and seamless access to financial services.</h3>
        </div>
        <div className="news-item">
          <img src={news2} alt="news2" />
          <p>12.11.2023</p>
          <h3>Global Bank Launches Cutting-Edge Digital Platform: A leading bank unveils a user-friendly digital platform, revolutionizing customer banking experience with advanced features and seamless access to financial services.</h3>
        </div>
        <div className="news-item">
          <img src={news3} alt="news2" />
          <p>12.11.2023</p>
          <h3>Global Bank Launches Cutting-Edge Digital Platform: A leading bank unveils a user-friendly digital platform, revolutionizing customer banking experience with advanced features and seamless access to financial services.</h3>
        </div>{" "}
        <div className="news-item">
          <img src={news4} alt="news2" />
          <p>12.11.2023</p>
          <h3>Global Bank Launches Cutting-Edge Digital Platform: A leading bank unveils a user-friendly digital platform, revolutionizing customer banking experience with advanced features and seamless access to financial services.</h3>
        </div>
      </section>
    </div>
  );
};

export default lastNews;
