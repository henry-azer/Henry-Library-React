import React, { useState, useEffect } from "react";

const RightNav = () => {
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

    return (
        <div className="right-nav">
            <div
                className="date-container"
                data-aos-duration="2000"
                data-aos-delay="100"
                data-aos="fade-down"
                data-aos-easing="ease-in"
            >
                <div className="date">{date.toLocaleDateString()}</div>
                <div className="time">{date.toLocaleTimeString()}</div>
            </div>
        </div>
    );
};

export default RightNav;
