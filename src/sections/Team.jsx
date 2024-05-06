import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-sm-12 section-title">
          <h2>Meet the Team</h2>
          <p>
            You'll always find one of these welcoming faces on Sabbath Morning!
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-12 col-md-4 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption convert-br">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
