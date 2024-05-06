import React, { useState, useEffect, useRef } from "react";

import {useLocation} from "react-router-dom"


import JsonData from "../data/data.json";

//COMPONENTS
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import  ZoomButton  from "../components/zoomButton";
import Footer from "../components/footer";

//HOME PAGE SECTIONS
import { About } from "../sections/about";
import { Schedule } from "../sections/schedule";
import { Team } from "../sections/Team";
import { Contact } from "../sections/contact";

function Home(props) {

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

    const title = props.titleInfo ? props.titleInfo[0].title : 'Some Title';
    const desc = props.titleInfo ? props.titleInfo[0].desc : 'Some Description';

    return(
        <>
            <Navigation />
            <Header data={landingPageData.Header}  title ={ title } desc={ desc }  />
            <ZoomButton />
            <About data={landingPageData.About} />
            <Schedule data={landingPageData.Schedule} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
            <Footer />
        </>
    )
}

export default Home;