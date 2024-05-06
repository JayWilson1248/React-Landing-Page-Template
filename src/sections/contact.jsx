import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

      document.getElementById("submitForm").style.display = 'none';
    
    
      /* replace below with your own Service ID, 
      Template ID and Public Key from your EmailJS account */ 

      /* Messages currently send to jaywilson2148@gmail.com referenceing Bill Shull. 
        TODO: set up for Sabbath Seminars Email */
    
    
    emailjs
      .sendForm("service_1lcxlcc", "template_41zwvsb", e.target, "KC4cRmNWv5DE5BQ6U")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          
          document.getElementById("success").style.display = 'block';

          setTimeout(function() {
            document.getElementById("submitForm").style.display = 'block';
            document.getElementById("submitForm").reset();
            document.getElementById("success").style.display = 'none';  
            
          }, 5000)

        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form id="submitForm" name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        className="form-control"
                        placeholder="Your Email Address"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <input 
                  type="hidden"
                  name="to_name"
                  id="to_name"
                  value="Sabbath Seminars"
                />
                <input 
                  type="hidden"
                  name="to_email"
                  id="to_email"
                  value="info@sabbathseminars.net"
                />
                
                <button 
                  type="submit" 
                  className="btn btn-custom btn-lg"
                >
                  Send Message
                </button>
              </form>
              <div id="success" style={{display:'none'}}>
                  <p>
                      Message sent successfully. Please check your email periodically for a response.
                  </p>
                </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 text-center"> {/* Giving */}
            <p>
            You may support Sabbath Seminars financially by making a contribution at the Loma Linda University Church website’s giving page.<br />
            </p>
            <div className="col-xs-8 text-left col-xs-offset-2">
              <ul style={{fontSize:"16px"}}>
                <li>
                  Start at <a
                        className="dark-link"
                        href="http://www.lluc.org" 
                        target="_blank" 
                        rel="noreferrer" 
                        
                      >
                      www.lluc.org
                    </a>
                </li>
                <li>
                  You will click on the GIVE button on the top right of the home page,
                  <br />&nbsp;&nbsp;&nbsp; - then again on the GIVE NOW button in the center.
                </li>
                <li>
                  Under Local Church click on More Offering Categories, then click on Sabbath Seminars.  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
};
