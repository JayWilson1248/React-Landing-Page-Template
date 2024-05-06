import React from "react";

export const Header = (props) => {

  return (
    <header id="header">
      <div className="intro">
        <div className="img"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text convert-br">
                <h1>
                  {props.title}
                  <span></span>
                </h1>
                <p className="convert-br">{props.desc}</p>
               {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
