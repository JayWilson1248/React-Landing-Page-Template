import React from "react";

//navigation
import { Navigation } from "../sections/navigation";

import Button  from "react-bootstrap/Button"

function Conversations(props) {
  return (
    <>
    <Navigation />
    <div id="conversation" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Conversations</h2>
          
          <div className="col-md-8 col-md-offset-2">
          Sabbath Seminars hosts occasional Afternoon Conversations with individuals who have made significant contributions in scholarship or leadership
          <br /><br />
          The conversation may or may not relate to the morning study
          <br /><br />
          Usually the Conversation follows a Sabbath Seminars potluck
          <br /><br />
          Click on the event for the video (remember that you must also have the Vimeo password)
          </div>
        
        </div>
        <div className="row">
          <div>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="conversation-items col-xs-12 "
                  >
                    <h4>{d.date}</h4>
                    <div>
                      {d.href ? 
                      <Button
                        variant="primary"
                        type="button"
                        href={d.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                     
                        {d.title}
                   
                      </Button>
                      : 
                         d.title
                      }
                    </div>
                    <br />
                    <span style={{ fontWeight:"lighter"}}>{d.desc}</span>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Conversations;