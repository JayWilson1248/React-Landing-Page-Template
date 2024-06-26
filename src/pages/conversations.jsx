import React from "react";

//navigation
import { Navigation } from "../components/navigation";
import  HeaderSmall  from "../components/header-small";
import  ZoomButton  from "../components/zoomButton";

import Footer from "../components/footer";
import Button  from "react-bootstrap/Button";

function Conversations(props) {
  
  const title = props.titleInfo ? props.titleInfo[1].title : 'Some Title';
  const desc = props.titleInfo ? props.titleInfo[1].desc : 'Some Description';

  return (
    <>
    <Navigation />
    <HeaderSmall  title ={ title } desc={ desc } />
    <ZoomButton />

    <div id="Conversations" className="text-center">
      <div className="container">
        <div className="section-title">
          <div className="col-md-8 col-md-offset-2">
            <p>
              Sabbath Seminars hosts occasional Afternoon Conversations with individuals who have made significant contributions in scholarship or leadership
              <br /><br />
              The conversation may or may not relate to the morning study
              <br /><br />
              Usually the Conversation follows a Sabbath Seminars potluck
              <br /><br />
              Click on the event for the video (remember that you must also have the Vimeo password)
            </p>
          </div>
        
        </div>
        
        <div className="col-xs-10 col-xs-offset-1 text-center">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="conversation-items col-xs-12 convert-br"
                >
                  <h4>{d.date}</h4>
                  <div>
                    <p>
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
                    </p>
                  </div>
                  <br />
                  <p style={{ fontWeight:"lighter"}}>{d.desc}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Conversations;