import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  const openVideoPopup = () => {
    window.open("https://www.loom.com/share/e2f8fcaa93d944109fe994d21f367ae6?sid=30d2e839-1ae0-4ee0-9618-f302d339565f", "_blank", "width=800,height=600");
  };

  return (
    <div className="about-section-container" id="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">
          Manage Your Expenses with Moneyfy
        </h1>
        <p className="primary-text">
          Moneyfy is a powerful expense tracker that helps you stay on top of your finances. With Moneyfy, you can easily track your income and expenses, set budgets, and analyze your spending habits.
        </p>
        <p className="primary-text">
          Key features of Moneyfy include:
        </p>
        <ul className="feature-list">
          <li>Expense tracking: Keep track of all your expenses in one place.</li>
          <li>Budgeting: Set budgets and monitor your spending.</li>
          <li>Income tracking: Track your income sources and monitor your cash flow.</li>
          <li>Reports and analytics: Gain insights into your spending patterns with detailed reports and analytics.</li>
          <li>Goal setting: Set financial goals and track your progress.</li>
        </ul>
        <div className="about-buttons-container">
          <button className="secondary-button"><Link className="secondary-button" to="/#container">Learn more</Link></button>
          <button className="watch-video-button" onClick={openVideoPopup}>
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
