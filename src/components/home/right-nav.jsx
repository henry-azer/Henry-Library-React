import React, { useState, useEffect } from "react";

import { Parallax } from "react-scroll-parallax";

const RightNav = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    function dateFormatter() {
        let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
            date
        );
        let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
        let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
        return `${da}-${mo}-${ye}`;
    }

    const opacity = props.fadeOut;

    return (
        <div className="right-nav" style={{ opacity }}>
            <div
                className="date-container"
                data-aos-duration="2000"
                data-aos-delay="100"
                data-aos="fade-down-right"
                data-aos-easing="ease-in"
            >
                <Parallax x={[0, -60]}>
                    <div className="date">{dateFormatter()}</div>
                    <div className="time">{date.toLocaleTimeString()}</div>
                </Parallax>
            </div>
        </div>
    );
};

export default RightNav;
