import React, { useEffect } from "react";

import AOS from "aos";

import { BsChevronRight } from "react-icons/bs";

import HenryJewelryImg from "..//resources/projects/henry-jewelry.png";
import HenryHotelImg from "..//resources/projects/henry-hotel.png";
import HenryTodoListImg from "..//resources/projects/henry-todo-list.png";

import Header from "./global/header";
import Footer from "./global/footer";
import BackToTop from "./global/back-to-top";
import ContactUsSection from "./home/contact-section";

function AboutUs() {
    useEffect(() => {
        AOS.init();
        document.title = "About Us | Henry Library";
    });

    return (
        <section id="about-us" className="about-us">
            <BackToTop />
            <Header />

            <div className="about-us-background"></div>
            <hr />

            <div className="personal-info">
                <div
                    className="left-description"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos="fade-up-right"
                >
                    <div className="title-heading-wrapper">
                        <h1>Back-End</h1>
                        <h3>Java Spring Framework</h3>
                    </div>
                    <img
                        src="https://www.logo.wine/a/logo/Spring_Framework/Spring_Framework-Logo.wine.svg"
                        alt="spring-framework"
                    />
                    <p>
                        The Spring Framework is an application framework and
                        inversion of control container for the Java platform.
                        The framework's core features can be used by any Java
                        application, but there are extensions for building web
                        applications on top of the Java EE platform.
                    </p>
                </div>

                <div className="personal-card">
                    <figure
                        className="info-wrapper"
                        data-aos-delay="100"
                        data-aos-duration="3000"
                        data-aos="flip-down"
                    >
                        <img
                            src="https://scontent.fcai2-1.fna.fbcdn.net/v/t31.18172-8/20690366_2035835423311047_5359789795468054116_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=UawSJq6EJbAAX9tkG-c&tn=LDdLzQOld4yostLV&_nc_ht=scontent.fcai2-1.fna&oh=fc4fe321bef33f2d2a5711df08fbed2e&oe=61B41347"
                            alt="henry-azer"
                        />
                        <figcaption>
                            <h2>
                                Henry &nbsp;<span>Azer</span>
                            </h2>
                            <span className="position">software engineer</span>
                            <hr />
                            <p>
                                Skilled Full Stack Java/React Developer, Three+
                                years of self-studying. Quick learner, working
                                hard as self-teaching and looking forward to
                                keeping pace with the times.
                            </p>
                        </figcaption>
                    </figure>

                    <div
                        className="mid-description"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos="fade-in"
                    >
                        <div className="title-heading-wrapper">
                            <h1>Full-Stack</h1>
                            <h3>Back-End & Front-End</h3>
                        </div>
                        <img
                            src="https://chennaitraining.in/wp-content/uploads/2020/02/fullstack.png"
                            alt="full-stack"
                        />
                        <p>
                            Full-stack refers to a group of programming
                            languages and tools a developer learns to handle
                            both the front-end and back-end development of a
                            website.
                        </p>
                    </div>
                </div>

                <div
                    className="right-description"
                    data-aos-delay="100"
                    data-aos-duration="3000"
                    data-aos="fade-up-left"
                >
                    <div className="title-heading-wrapper">
                        <h1>Front-End</h1>
                        <h3>React js Framework</h3>
                    </div>
                    <img
                        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                        alt="react-framework"
                    />
                    <p>
                        React is a free and open-source front-end JavaScript
                        library for building user interfaces or UI components.
                        It is maintained by Meta and a community of individual
                        developers and companies. React can be used as
                        development of single-page and mobile applications.
                    </p>
                </div>
            </div>

            <div className="recent-projects">
                <div
                    className="title-heading-wrapper"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <h1>Recent Projects</h1>
                    <h3>Go through my recently completed projects</h3>
                </div>

                <ul
                    className="projects"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos="fade-up"
                >
                    <li className="project project-1">
                        <div className="project-wrapper">
                            <div className="project-description">
                                <h2
                                    onClick={() =>
                                        window.open(
                                            "https://henry-jewelry.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                >
                                    Henry Jewelry
                                </h2>
                                <h3>Jan 2021</h3>

                                <p>
                                    Spring Boot E-commerce website with Spring
                                    Data JPA, Spring Security In addition to
                                    Front-End development and Deployment.
                                </p>
                                <div
                                    className="button-wrapper"
                                    data-aos-delay="100"
                                    data-aos-duration="1000"
                                    data-aos="flip-down"
                                >
                                    <a
                                        href="https://henry-jewelry.herokuapp.com"
                                        className="btn-1"
                                        rel="noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <figure className="project-img">
                                <img
                                    src={HenryJewelryImg}
                                    alt="henry-jewelry"
                                    onClick={() =>
                                        window.open(
                                            "https://henry-jewelry.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                />
                            </figure>
                        </div>
                    </li>
                    <li className="project project-2">
                        <div className="project-wrapper">
                            <div className="project-description">
                                <h2
                                    onClick={() =>
                                        window.open(
                                            "https://henry-hotel-reservation.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                >
                                    Henry Hotel Reservation
                                </h2>
                                <h3>Sep 2020</h3>
                                <p>
                                    Spring Boot Hotel Reservation Full App with
                                    Spring Data JPA, Spring Security In addition
                                    to Front-End development and Deployment.
                                </p>
                                <p>
                                    Limited free Database.
                                    <br />
                                    username: henry@yahoo.com
                                    <br />
                                    password: henry0123
                                </p>
                                <div
                                    className="button-wrapper"
                                    data-aos-delay="100"
                                    data-aos-duration="1000"
                                    data-aos="flip-down"
                                >
                                    <a
                                        href="https://henry-hotel-reservation.herokuapp.com"
                                        className="btn-1"
                                        rel="noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            <figure className="project-img">
                                <img
                                    src={HenryHotelImg}
                                    alt="henry-hotel-reservation"
                                    onClick={() =>
                                        window.open(
                                            "https://henry-hotel-reservation.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                />
                            </figure>
                        </div>
                    </li>
                    <li className="project project-3" id="project-3">
                        <div className="project-wrapper">
                            <div className="project-description">
                                <h2
                                    onClick={() =>
                                        window.open(
                                            "https://henry-todo-list.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                >
                                    Henry Todo List
                                </h2>
                                <h3>Sep 2021</h3>
                                <p>
                                    To-Do List website using Spring Boot in
                                    Back-End with React in Front-End development
                                    with Deployment.
                                </p>
                                <a
                                    className="btn-2"
                                    href="https://henry-todo-list.herokuapp.com"
                                    rel="noreferrer"
                                >
                                    <span>
                                        View Project{" "}
                                        <BsChevronRight className="btn-arrow" />
                                    </span>
                                </a>
                            </div>
                            <figure className="project-img">
                                <img
                                    src={HenryTodoListImg}
                                    alt="henry-todo-list"
                                    onClick={() =>
                                        window.open(
                                            "https://henry-todo-list.herokuapp.com",
                                            "_blank"
                                        )
                                    }
                                />
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>

            <ContactUsSection />
            <Footer />
        </section>
    );
}

export default AboutUs;
