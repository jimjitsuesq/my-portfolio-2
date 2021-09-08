import React from 'react';

import { logos } from '../../logos.json'

function TechnologyBox (props) {  
  return (
    <div className="project-technology-box" id={`${props.title}`}>
      <h3>{props.title}</h3>
      <div className="project-technology-box-logo-container">
        {[props.type].map((technology, i) => {
          return (
            <img  
              key={i}
              src={require(`../../images/projects/logos/${props.type[i][0]}.svg`).default} 
              alt={`${logos[props.type[i][1]].logo_alt}`} 
              height={`${logos[props.type[i][1]].logo_height}`}
              style={{  paddingTop: `${logos[props.type[i][1]].logo_padding_top}`, 
                        paddingRight: `${logos[props.type[i][1]].logo_padding_right}`, 
                        paddingBottom: `${logos[props.type[i][1]].logo_padding_bottom}`, 
                        paddingLeft: `${logos[props.type[i][1]].logo_padding_left}`}}
            />
          )
        })}
      </div>
  </div>
)};

export default TechnologyBox;