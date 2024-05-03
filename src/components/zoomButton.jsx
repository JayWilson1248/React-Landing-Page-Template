import React, { useState } from "react";
import Button  from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';

import zoomHost from "../assets/img/team/Mailen-setting-up-zoom-cropped.jpg"

function ZoomButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    
  }
  const handleShow = () => {
    setShow(true);
    
  }

  

  //href="" 

  return (
    <>
     
      <Button 
        variant="primary"
        size="lg"
        
        type="button"
        onClick={handleShow}
        style={{ position:"fixed", bottom:"20px", left:"20px", zIndex:500}}
      >
        Click here to join our zoom class!
      </Button>
     

     

      <Modal 
        show={show} 
        onHide={handleClose} 
        style={{opacity:1}}
      >
        <Modal.Header>
          <Modal.Title>Zoom Class</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <strong>Please remember to mute your microphone unless you are speaking in the zoom class.</strong>
        <br /><br />
        If you need to contact our zoom host, send an email to
        <br />
        zoomhost@sabbathseminars.net
        <hr />
        <div className="col-xs-12 text-center">
          <img src={zoomHost} alt="Mailen Kootsey" width="50%" />
        </div>
        Mailen Kootsey, resident class tech geek, biophysicist, jazz band keyboardist and part time philosopher of religion, preparing for our first hybrid zoom class experiment.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
            variant="primary" 
            href="https://us02web.zoom.us/j/81174477062?pwd=Sk9wVEJkNk8waENVekoyVW0vblNxdz090"
            onClick={handleClose}>
            Launch Zoom
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ZoomButton;