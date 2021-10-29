import React, { useState, useEffect } from "react";

import { Parallax } from "react-scroll-parallax";

import { BsChevronDown } from "react-icons/bs";

import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function HomeSection() {
    const [date, setDate] = useState(new Date());
    const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);

    const opacity = Math.min(12 / currentScrollY, 1);

    useEffect(() => {
        window.onscroll = () => {
            const newScrollY = Math.ceil(window.scrollY / 50) * 50;
            if (currentScrollY !== newScrollY) {
                setCurrentScrollY(newScrollY);
            }
        };

        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function scrollHandler() {
        window.scrollTo({ top: 670, left: 0, behavior: "smooth" });
    }

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

    return (
        <section className="home-section">
            <Parallax y={[30, -30]}>
                <div className="home-background"></div>
            </Parallax>

            <div className="home-wrapper">
                <div className="left-nav" style={{ opacity }}>
                    <Parallax y={[0, -150]}>
                        <div
                            className="social-container"
                            data-aos-delay="100"
                            data-aos-duration="2000"
                            data-aos="fade-down-right"
                            data-aos-easing="ease-in"
                        >
                            <Button className="social-btn">
                                <GitHubIcon className="social-icon" />
                            </Button>
                            <Button className="social-btn">
                                <LinkedInIcon className="social-icon" />
                            </Button>
                            <Button className="social-btn">
                                <FacebookIcon className="social-icon" />
                            </Button>
                        </div>
                    </Parallax>
                </div>

                <div
                    className="main-content"
                    data-aos-delay="1000"
                    data-aos-duration="3000"
                    data-aos="fade-up"
                >
                    <Parallax y={[0, -250]}>
                        <div className="content-container" style={{ opacity }}>
                            <h2>To be a "Good Reader"</h2>
                            <h1>READ NOW!</h1>
                            <p>
                                A reader lives a thousand lives before he dies,
                                said Jojen. The man who never reads lives only
                                one.
                            </p>
                            <p>
                                <cite>―George R.R. Martin</cite>
                            </p>
                        </div>

                        <div style={{ opacity }}>
                            <BsChevronDown
                                className="ChevronDown-button"
                                data-aos-delay="2000"
                                data-aos-duration="3000"
                                data-aos-easing="ease-in-out"
                                data-aos="fade-up"
                                onClick={scrollHandler}
                            />
                        </div>
                    </Parallax>
                </div>

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
                            <div className="time">
                                {date.toLocaleTimeString()}
                            </div>
                        </Parallax>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
