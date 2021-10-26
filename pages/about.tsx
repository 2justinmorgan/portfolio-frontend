import React from "react";
import Paragraph from "../components/Paragraph/Paragraph";

const About: React.FunctionComponent = () => {
  return (
    <>
      <Paragraph>
        Hello! Thanks for checking out my web app. I hope it represents my
        passion for computer science to the point that YOU feel encouraged to
        work with me. I studied business as an undergradate student and found
        interest in software and computers during a junior year internship at a
        software company in Houston, TX. Rather than changing majors and adding
        two more years to my study plan, I chose to pursue a Master&apos;s
        degree in computer science; hence my present stay at{" "}
        <a href="https://calpoly.edu" target="_blank" rel="noopener noreferrer">
          <b>Cal Poly SLO</b>
        </a>
        . Since graduation, I have thoroughly enjoyed studying engineering math
        and computer sciences.
      </Paragraph>
      <strong>
        I would be delighted to talk with you about career opportunities and/or
        anything else that comes to mind!
      </strong>
    </>
  );
};

export default About;
