import React from "react";

import Marquee from "react-fast-marquee";

function ReadingSection() {
    return (
        <section className="reading-section">
            <div
                className="moving-text"
                data-aos-delay="70"
                data-aos-duration="2000"
                data-aos="fade-up"
            >
                <Marquee speed={90} gradient={false} direction="left">
                    <span className="marquee-text-1">
                        “The more that you read, the more things you will know.
                        The more that you learn, the more places you'll go.” ―
                        Dr. Seuss, I Can Read With My Eyes Shut!
                    </span>
                </Marquee>
                <Marquee speed={90} gradient={false} direction="right">
                    <span className="marquee-text-2">
                        “The more that you read, the more things you will know.
                        The more that you learn, the more places you'll go.” ―
                        Dr. Seuss, I Can Read With My Eyes Shut!
                    </span>
                </Marquee>
            </div>
            <div className="reading-wrapper">
                <div
                    className="reading-banner"
                    data-aos-delay="80"
                    data-aos-duration="1500"
                    data-aos="fade-up-right"
                >
                    <figure className="reading-img">
                        <img
                            src="https://images.pexels.com/photos/1616779/pexels-photo-1616779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="girl-read"
                        />
                        <div className="border one">
                            <div></div>
                        </div>
                        <div className="border two">
                            <div></div>
                        </div>
                    </figure>
                </div>
                <div
                    className="reading-text"
                    data-aos-delay="80"
                    data-aos-duration="1000"
                    data-aos="fade-right"
                >
                        <span>Reading Makes</span>
                        <div className="text-flip">
                            <div>
                                <div>Work</div>
                            </div>
                            <div>
                                <div>Daily Life</div>
                            </div>
                            <div>
                                <div>Everything</div>
                            </div>
                        </div>
                        AweSoMe!
                    </div>
                </div>
        </section>
    );
}

export default ReadingSection;
