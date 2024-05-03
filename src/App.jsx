import React, { useState, useEffect, useRef } from "react";

import {Routes, Route, useLocation} from "react-router-dom"

//COMPONENTS
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import  ZoomButton  from "./components/zoomButton";

//HOME PAGE SECTIONS
import { About } from "./sections/about";
import { Schedule } from "./sections/schedule";
import { Team } from "./sections/Team";
import { Contact } from "./sections/contact";
import JsonData from "./data/data.json";

//PAGES
import Conversations from "./pages/conversations";
import LGBTQ  from "./pages/lgbtq";

import SmoothScroll from "smooth-scroll";

//CSSes
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});

  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    setLandingPageData(JsonData);

    if(location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)
        ?.scrollIntoView({behavior: 'smooth', block: 'start' });
        lastHash.current ='';

      }, 100)

    }

  }, [location]);

  
  

  return (
    <Routes>
      <Route
        path="/"
        element= {(

          <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <ZoomButton />
            <About data={landingPageData.About} />
            <Schedule data={landingPageData.Schedule} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </div>
        )}
      />
      <Route path="/pages/conversations" element={<Conversations data={landingPageData.Conversations} />} />
      <Route path="/pages/lgbtq" element={<LGBTQ data={landingPageData.LGBTQ} />} />

    </Routes>
  );
};

export default App;
