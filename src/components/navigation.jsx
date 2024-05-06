import React from "react";

//BOOTSTRAP NAV
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/img/llu_logo.png';

export const Navigation = (props) => {
  return (
    <>
      <Navbar sticky="top" expand="md" className="bg-body-tertiary navbar-fixed-top">
        <Container>
          <Navbar.Brand href="#page-top">
            <img src={Logo} alt="llu logo" width="auto" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav 
              className="justify-content-center nav-justified"
              
              
              onSelect={(selectedKey) => `selected ${selectedKey}`}
              
            >
              <Nav.Link
                href="/#about"
              >
                Mission & Vision
              </Nav.Link>
              <Nav.Link
                href="/#schedule"
              >
                Current Schedule
              </Nav.Link>
              <Nav.Link
                  href="/pages/Conversations"
                >
                Conversations
              </Nav.Link>
              <Nav.Link
              
                href="/pages/lgbtq"
              >
                LGBTQ+
              </Nav.Link>
              <Nav.Link
                href="/#team"
              >
                Team
              </Nav.Link>
              <Nav.Link
                href="/#contact"
              >
                Contact & Giving
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
