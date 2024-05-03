import React from "react";


function HeaderSmall(props) {
  console.log(props.location);
  return (
    <>
    <header id="header">
      <div className="intro">
        <div className="filter" />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>{props.location}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeaderSmall;