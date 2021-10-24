import React, { useState, useEffect } from "react";

import AOS from "aos";

import Loader from "../loader";
import HomeSection from "./home-section";
import TutorialSection from "./tutorial-section";
import ReadingSection from "./reading-section";
import ServicesSection from "./services-section";
import BookSection from "./book-section";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTimeout] = useState(12);

    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);

        document.addEventListener("scroll", () => {
            if (window.scrollY > 1000 && window.scrollY < 2600) {
                document.body.style.backgroundColor = "black";
            } else {
                document.body.style.backgroundColor = "rgba(39, 20, 20, 0.97)";
            }
        });
    });

    return (
        <div className="home">
            <Loader loaderTimeout={loadTimeout} />
            {isLoaded && <HomeSection />}
            <TutorialSection />
            <ReadingSection />
            <ServicesSection />
            <BookSection />
        </div>
    );
};

export default Home;
