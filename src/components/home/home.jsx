import React, { useState, useEffect } from "react";

import AOS from "aos";

import Loader from "../loader";
import MainSection from "./main-section";
import BookSection from "./book-section";

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

            <BookSection />
        </div>
    );
};

export default Home;
