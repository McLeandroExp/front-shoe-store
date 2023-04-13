import React from "react";

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="about-page__title">About us</h1>
      <p className="about-page__description">
        We are a fictitious company dedicated to creating innovative
        technological solutions. Our team is made up of experts in programming,
        design, and marketing, and we work to offer our clients the best
        products and services.
      </p>
      <ul className="about-page__team">
        <li className="about-page__team-member">John Smith - Developer</li>
        <li className="about-page__team-member">Mary Johnson - Designer</li>
        <li className="about-page__team-member">Peter Davis - Marketer</li>
      </ul>
    </div>
  );
};
