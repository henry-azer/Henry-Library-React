import React, { useState, useEffect } from "react";

import Header from "../header";
import LeftNav from "../left-nav";
import RightNav from "../right-nav";

import { Parallax } from "react-scroll-parallax";

import { BsChevronDown } from "react-icons/bs";

function MainSection() {
    const [currentScrollY, setCurrentScrollY] = useState(window.scrollY);

    const opacity = Math.min(12 / currentScrollY, 1);

    useEffect(() => {
        window.onscroll = () => {
            const newScrollY = Math.ceil(window.scrollY / 50) * 50;
            if (currentScrollY !== newScrollY) {
                setCurrentScrollY(newScrollY);
            }
        };
    });

    function scrollHandler() {
        window.scrollTo({ top: 900, left: 0, behavior: "smooth" });
    }

    return (
        <section className="home-section">
            <Header />

            <LeftNav fadeOut={opacity} />

            <RightNav fadeOut={opacity} />

            <Parallax y={[20, -20]}>
                <div className="home-background"></div>
            </Parallax>

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
                            A reader lives a thousand lives before he dies, said
                            Jojen. The man who never reads lives only one.
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
        </section>
    );
}

export default MainSection;
