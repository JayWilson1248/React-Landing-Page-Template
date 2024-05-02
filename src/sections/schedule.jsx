import React from "react";
import NewSeries from "../assets/img/schedule_hero.jpg"

export const Schedule = (props) => {
  return (
    <div id="schedule" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Current Schedule</h2>
          <h3 style={{ textTransform:"uppercase"}}>
          Scientists reflect on their journey of faith
          </h3>
          <img src={NewSeries} alt="michaelangelo hand of God"/>
          <p>
          Announcing A New Series Organized by Mailen Kootsey
          </p>
        </div>
        <br />
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
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
