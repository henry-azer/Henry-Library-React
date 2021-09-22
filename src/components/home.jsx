import React, { useEffect } from "react";

import Header from "./header";
import LeftNav from "./left-nav";
import RightNav from "./right-nav";

import AOS from "aos";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="home">
            <Header />
            <LeftNav />
            <RightNav />
            
            <div
                className="home-background"
                data-aos="fade"
                data-aos-duration="4000"
            >
                {/* <div className="stars"></div> */}
            </div>

            <div
                className="main-content"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                <h2>To be a "Good Reader"</h2>
                <h1>READ NOW!</h1>
                <p>
                    A reader lives a thousand lives before he dies, said Jojen.
                    The man who never reads lives only one.
                </p>
                <p>
                    <cite>―George R.R. Martin</cite>
                </p>
            </div>
        </div>
    );
};

export default Home;
