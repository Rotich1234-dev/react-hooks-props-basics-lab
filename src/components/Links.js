import React from "react";

function Links(props) {
  const { github, linkedin } = props;

  return (
    <div>
      <h3>Links</h3>
      {/* Display the Github link if provided */}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      )}

      {/* Display the LinkedIn link if provided */}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
      )}
    </div>
  );
}

export default Links;
