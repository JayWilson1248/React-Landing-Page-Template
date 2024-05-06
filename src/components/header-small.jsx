import React from "react";
//import {useLocation} from 'react-router-dom'

function HeaderSmall(props) {
  //const location = useLocation();
  //const title = location.state.title;

  

  return (
    <>
    <header id="header">
      <div className="intro">
        <div className="filter" />
        <div className="overlay">
          <div className="container">
            <div className="col-xs-10">
              <div className="intro-text">
                <h1>{props.title}</h1>
                <p className="convert-br">{props.desc}</p>
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