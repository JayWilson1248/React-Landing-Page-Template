import React, { useState, useEffect } from "react";
import { Navigation } from "./sections/navigation";
import { Header } from "./sections/header";
import { Mission } from "./sections/mission";
import { About } from "./sections/about";
import { Services } from "./sections/services";
import { Gallery } from "./sections/gallery";
import { Testimonials } from "./sections/testimonials";
import { Team } from "./sections/Team";
import { Contact } from "./sections/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Mission data={landingPageData.Mission} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
