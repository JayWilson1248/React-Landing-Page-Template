import React, { useState, useEffect } from "react";

import {Routes, Route,} from "react-router-dom"

import { Navigation } from "./sections/navigation";
import { Header } from "./sections/header";
import { About } from "./sections/about";
import { Schedule } from "./sections/schedule";
import { Testimonials } from "./sections/testimonials";
import { Team } from "./sections/Team";
import { Contact } from "./sections/contact";
import JsonData from "./data/data.json";

import Conversations from "./pages/conversations";

import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  

  return (
    <Routes>
      <Route
        path="/"
        element= {(

          <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <About data={landingPageData.About} />
            <Schedule data={landingPageData.Schedule} />
            
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </div>
        )}
      />
      <Route path="/pages/conversations" element={<Conversations data={landingPageData.Conversations} />} />
    </Routes>
  );
};

export default App;
