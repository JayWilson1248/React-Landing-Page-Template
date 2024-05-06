import React from "react";
import NewSeries from "../assets/img/schedule_hero.jpg"
import { Button } from "react-bootstrap"


export const Schedule = (props) => {
  return (
    <div id="schedule" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Current Schedule</h2>
          <h1>
            May 4: Michael Zimmerman
            <br />“Church Acceptance of Theistic Evolution Across the U.S.”
          </h1>
          <p>
            <br />
            Essential Reading Assignment: <br />
            <Button
              variant="primary"
              size="sm"
              href="https://sciencereligiondialogue.org/resources/profiles-listing/zimmerman/"
              target="_blank"
              rel="noreferer"
            >
                
              Zimmerman - AAAS - DoSER (sciencereligiondialogue.orgMichael)
            </Button>
            <br/><br />
            <i>Postscript Session to “Scientists Reflect on Their Faith Journey”</i>
          </p>


          <h3 style={{ textTransform:"uppercase"}}>
          Scientists reflect on their journey of faith
          </h3>
          <img src={NewSeries} width="50%" alt="michaelangelo hand of God"/>
          <p>
          Announcing A New Series Organized by Mailen Kootsey
          </p>
        </div>
        <br />
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 convert-br">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
