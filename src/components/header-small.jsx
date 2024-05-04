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
            <div className="row">
              <div className="intro-text convert-br">
                <h1>{/* title ? title : ""; */}Some Title</h1>
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