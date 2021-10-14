import React, { useState, useEffect } from "react";

import { Parallax } from "react-scroll-parallax";

import AOS from "aos";

import Loader from "../loader";
import MainSection from "./main-section";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTimeout] = useState(12);

    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);
    });

    return (
        <div className="home">
            <Loader loaderTimeout={loadTimeout} />
            {isLoaded && <MainSection />}

            <Parallax y={[0, -78]}>
                <section className="books-section">
                    <div className="books-content">
                        <h1>Every thing u want: </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Odit quibusdam et, est minus porro saepe rerum
                            voluptatum pariatur. Culpa officia doloremque
                            inventore. Mollitia sit non rem animi doloribus
                            illum adipisci!
                        </p>
                    </div>
                    <div className="books-cards"></div>
                </section>
            </Parallax>
        </div>
    );
};

export default Home;
