import React, { useState, useEffect } from "react";

import Loader from "./loader";

import Header from "./header";
import LeftNav from "./left-nav";
import RightNav from "./right-nav";

import AOS from "aos";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTimeout] = useState(1);

    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);
    });

    return (
        <div className="home">
            <Loader loaderTimeout={loadTimeout} />
            {isLoaded && (
                <div className="home-container">
                    <Header /> 
                    <LeftNav /> 
                    <RightNav />
                    <div
                        className="home-background"
                        data-aos="fade"
                        data-aos-duration="4000"
                    ></div>
                    <div
                        className="main-content"
                        data-aos-delay="1000"
                        data-aos-duration="3000"
                        data-aos="fade-up"
                    >
                        <h2>To be a "Good Reader"</h2>
                        <h1>READ NOW!</h1>
                        <p>
                            A reader lives a thousand lives before he dies, said
                            Jojen. The man who never reads lives only one.
                        </p>
                        <p>
                            <cite>―George R.R. Martin</cite>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
