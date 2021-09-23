import React, { useEffect } from "react";

import Header from "./header";
import LeftNav from "./left-nav";
import RightNav from "./right-nav";

// import HomeBgImg from "..//resources/images/home.png";

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
                <div className="slider slider-1"></div>
                <div className="slider slider-2"></div>
                <img src="https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>

            <div
                className="main-content"
                data-aos-delay="1000"
                data-aos-duration="3000"
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
