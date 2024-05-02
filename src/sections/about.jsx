import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
    <div className="container">
      <div className="section-title">
        <h2>About Us</h2>
       
      </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-10 col-xs-offset-1">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};