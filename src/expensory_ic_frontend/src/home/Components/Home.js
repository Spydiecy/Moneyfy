import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToRegisterLogin = () => {
    navigate("../../RegisterLoginUser");
  };

  return (
    <div className="home-container" id="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Track Your Expenses with Moneyfy
          </h1>
          <p className="primary-text">
            Moneyfy helps you take control of your finances! Track your expenses, set budgets, and save money effectively.
          </p>
          <button className="secondary-button" onClick={redirectToRegisterLogin}>
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;