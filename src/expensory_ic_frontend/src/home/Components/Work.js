import React from "react";
import img1 from "../Assets/me.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const teamMember = {
    image: img1,
    name: "Tanishq",
    role: "Full Stack Blockchain Developer",
    github: "https://github.com/spydiecy",
    linkedin: "https://linkedin.com/in/tanishqgupta-tech",
    twitter: "https://twitter.com/tanishqistaken",
    bio: "Greetings! 👋 I'm Tanishq Gupta, a computer science enthusiast currently pursuing a B.Tech degree. Experienced in both frontend and backend development, and comfortable with concepts such as Blockchain and Smart Contracts."
  };

  return (
    <div className="container" id="container">
      <p className="primary-subheading">About Us</p>
      <h1 className="about-heading">Meet Our Team</h1>
      <div className="row centr">
        <div className="col-md-4 col-sm-6">
          <div className="our-team">
            <div className="pic">
              <img src={teamMember.image} alt={teamMember.name} />
            </div>
            <div className="team-content">
              <h3 className="title">{teamMember.name}</h3>
              <span className="post">{teamMember.role}</span>
              <p className="bio">{teamMember.bio}</p>
              <div className="socials">
                <a href={teamMember.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;