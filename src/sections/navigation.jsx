import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/llu_logo.png';

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src={Logo} alt="llu logo" width="auto" height="100%" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={{
                pathname:"/",
                hash:"#about"
                }}
              >
              <div>
                Mission & Vision
              </div>
              </Link>
            </li>
            <li>
            <Link to={{
                pathname:"/",
                hash:"#schedule"
                }}
              >
              <div>
                Current Schedule
              </div>
              </Link>
            </li>
            <li>
              <Link to={{
                pathname: "/pages/Conversations",
                hash:"#Conversations",
              }}
                >
                Conversations
              </Link>
            </li>
            <li>
            <Link to={{
                pathname:"/",
                hash:"#testimonials"
                }}
              >
              <div>
                LGBTQ+
              </div>
              </Link>
            </li>
            <li>
            <Link to={{
                pathname:"/",
                hash:"#team"
                }}
              >
              <div>
                Team
              </div>
              </Link>
            </li>
            <li>
            <Link to={{
                pathname:"/",
                hash:"#contact"
                }}
              >
              <div>
                Contact & Giving
              </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
