import React from "react";
import Links from "./Links";

function About(props) {
  const { bio, github, linkedin } = props;

  return (
    <div id="about">
      <h2>About Me</h2>
      
      {/* Conditionally render the <p> tag if bio prop is provided and not an empty string */}
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Include the Links component and pass down github and linkedin props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
