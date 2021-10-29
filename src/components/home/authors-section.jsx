import React from "react";

function AuthorsSection() {
    return (
        <section id="authors-section" className="authors-section">
            <div
                className="header-wrapper"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                <h1>Greatest Authors</h1>
                <h3>A huge collection of popular books</h3>
            </div>

            <div className="authors-cards">
                <figure
                    className="author-card"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <div className="profile-image">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
                            alt="sample47"
                        />
                    </div>
                    <figcaption>
                        <h3>Fleece Marigold</h3>
                        <h4>Founder</h4>
                        <p>
                            Which is worse, that everyone has his price, or that
                            the price is always so low.
                        </p>
                    </figcaption>
                </figure>
                <figure
                    className="author-card"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <div className="profile-image">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample83.jpg"
                            alt="sample83"
                        />
                    </div>
                    <figcaption>
                        <h3>Norman Gordon</h3>
                        <h4>Web Designer</h4>
                        <p>
                            I'm killing time while I wait for life to shower me
                            with meaning and happiness.
                        </p>
                    </figcaption>
                </figure>
                <figure
                    className="author-card"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <div className="profile-image">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample70.jpg"
                            alt="sample70"
                        />
                    </div>
                    <figcaption>
                        <h3>Ruby Von Rails</h3>
                        <h4>Public Relations</h4>
                        <p>
                            The only skills I have the patience to learn are
                            those that have no real application in life.{" "}
                        </p>
                    </figcaption>
                </figure>
            </div>

            <div
                className="button-wrapper"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos="flip-down"
            >
                <a href="underDev.com" className="btn-1" rel="noreferrer">
                    More Authors
                </a>
            </div>
        </section>
    );
}

export default AuthorsSection;
