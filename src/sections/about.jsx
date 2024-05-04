import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
    <div className="container">
      <div className="section-title col-sm-12">
        <h2>About Us</h2>
        <p>
        Welcome to Sabbath Seminars!  We meet Saturday mornings from 10:30 AM to 12:30 PM to discuss topics of religion, theology, science, and philosophy. The meeting room is on the third floor of the Centennial Building on the campus of Loma Linda University, Loma Linda, California. You can expect a presentation of 30-40 minutes followed by vigorous discussion open to all.
        <br /><br />
        Sabbath Seminars is a welcoming spiritual community and ministry of the Loma Linda University Church. We explore life’s big questions using the tools of reason, biblical study, human experience, and our Christian heritage.
        </p>
      </div>
        
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-10 col-xs-offset-1 convert-br">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        
      </div>
    </div>
  );
};
