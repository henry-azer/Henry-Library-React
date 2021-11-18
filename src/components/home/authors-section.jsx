import React from "react";

function AuthorsSection() {
    return (
        <section id="authors-section" className="authors-section">
            <div
                className="title-heading-wrapper"
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
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <div className="profile-image">
                        <img
                            src="https://brittlepaper.com/wp-content/uploads/2019/11/image.flvcrop.2048.5000.jpeg"
                            alt="alain-mabanckou"
                        />
                    </div>
                    <figcaption>
                        <h3>Alain Mabanckou</h3>
                        <h4>Author</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita odio magni voluptas nisi.
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
                            src="https://brittlepaper.com/wp-content/uploads/2019/11/image.flvcrop.2048.5000.jpeg"
                            alt="alain-mabanckou"
                        />
                    </div>
                    <figcaption>
                        <h3>Alain Mabanckou</h3>
                        <h4>Author</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita odio magni voluptas nisi.
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
                            src="https://brittlepaper.com/wp-content/uploads/2019/11/image.flvcrop.2048.5000.jpeg"
                            alt="alain-mabanckou"
                        />
                    </div>
                    <figcaption>
                        <h3>Alain Mabanckou</h3>
                        <h4>Author</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita odio magni voluptas nisi.
                        </p>
                    </figcaption>
                </figure>
            </div>

            <a
                href="underDev.com"
                className="btn-1"
                rel="noreferrer"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos="flip-down"
            >
                More Authors
            </a>
        </section>
    );
}

export default AuthorsSection;
