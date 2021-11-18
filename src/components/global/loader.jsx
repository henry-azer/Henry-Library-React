import React, { useState, useEffect } from "react";

import Logo from "../..//resources/logo/light-logo.png";

import ScrollLock from "react-scroll-lock-component";

const Loader = (props) => {
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false);
        }, props.loaderTimeout);
    });

    return (
        <ScrollLock>
            <div className="loader">
                {isLoaded && (
                    <div
                        className="loader-container"
                        data-aos="fade-in"
                        data-aos-easing="ease-in-out"
                    >
                        <img className="loader-logo" src={Logo} alt="Logo" />
                        <div className="loading-bar"></div>
                        <div className="lines-container">
                            <i className="line-1 line-animation"></i>
                            <i className="line-2 line-animation"></i>
                            <i className="line-3 line-animation"></i>
                            <i className="line-4 line-animation"></i>
                            <i className="line-5 line-animation"></i>
                            <i className="line-6 line-animation"></i>
                            <i className="line-7 line-animation"></i>
                            <i className="line-8 line-animation"></i>
                            <i className="line-9 line-animation"></i>
                        </div>
                    </div>
                )}
            </div>
        </ScrollLock>
    );
};

export default Loader;
