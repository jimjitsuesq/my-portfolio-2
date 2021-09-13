import React from "react";

import { logos } from "../../logos.json";

function TechnologyBox(props) {
  const logoArray = [];
  function generateLogoArray() {
    for (let i = 0; i < props.type.length; i++) {
      logoArray.push(logos[props.type[i][1]]);
    }
  }
  generateLogoArray();
  return (
    <div className="main-project-technology-box" id={`${props.title}`}>
      <h3>{props.title}</h3>
      <div className="main-project-technology-box-logo-container">
        {logoArray.map((logo, i) => {
          return (
            <img
              key={i}
              src={
                require(`../../images/projects/logos/${logo.logo_name}.svg`)
                  .default
              }
              alt={`${logo.logo_alt}`}
              height={`${logo.logo_height}`}
              style={{
                paddingTop: `${logo.logo_padding_top}`,
                paddingRight: `${logo.logo_padding_right}`,
                paddingBottom: `${logo.logo_padding_bottom}`,
                paddingLeft: `${logo.logo_padding_left}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechnologyBox;
