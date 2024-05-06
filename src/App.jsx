//CORE
import React, { useState, useEffect, useRef } from "react";
import {Routes, Route, useLocation} from "react-router-dom"

//DATA
import JsonData from "./data/data.json";

//PAGES
import Home from "./pages/home";
import Conversations from "./pages/conversations";
import LGBTQ  from "./pages/lgbtq";

import SmoothScroll from "smooth-scroll";

//CSSes
import './assets/css/bootstrap.css';
import './assets/fonts/font-awesome/css/font-awesome.css';
import './assets/css/style.css';
import './assets/css/nivo-lightbox/nivo-lightbox.css';
import './assets/css/nivo-lightbox/default.css';
  
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
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
      <Route path="/" element={<Home data={landingPageData.Home} titleInfo={landingPageData.Headers} /> } />
      <Route path="/pages/conversations" element={<Conversations data={landingPageData.Conversations}  titleInfo={landingPageData.Headers}/>} />
      <Route path="/pages/lgbtq" element={<LGBTQ data={landingPageData.LGBTQ}  titleInfo={landingPageData.Headers} />} />

    </Routes>
  );
};

export default App;
