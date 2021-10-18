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

        // preventScrolling();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);
    });

    // function preventScrolling() {
    //     var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    //     function preventDefault(e) {
    //         e.preventDefault();
    //     }

    //     function preventDefaultForScrollKeys(e) {
    //         if (keys[e.keyCode]) {
    //             preventDefault(e);
    //             return false;
    //         }
    //     }

    //     var supportsPassive = false;
    //     try {
    //         window.addEventListener(
    //             "test",
    //             null,
    //             Object.defineProperty({}, "passive", {
    //                 get: function () {
    //                     return (supportsPassive = true);
    //                 },
    //             })
    //         );
    //     } catch (e) {}

    //     var wheelOpt = supportsPassive ? { passive: false } : false;
    //     var wheelEvent =
    //         "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    //     window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    //     window.addEventListener("DOMMouseScroll", preventDefault, false);
    //     window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    // }

    return (
        <div className="home">
            <Loader loaderTimeout={loadTimeout} />
            {isLoaded && <MainSection />}

            <BookSection />
        </div>
    );
};

export default Home;
