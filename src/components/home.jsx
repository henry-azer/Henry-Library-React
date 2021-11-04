import React, { useState, useEffect } from "react";

import AOS from "aos";

import Loader from "./global/loader";
import Header from "./global/header";
import Footer from "./global/footer";
import BackToTop from "./global/back-to-top";

import HomeSection from "./home/home-section";
import TutorialSection from "./home/tutorial-section";
import ReadingSection from "./home/reading-section";
import ServicesSection from "./home/services-section";
import BooksSection from "./home/books-section";
import AuthorsSection from "./home/authors-section";
import ContactUsSection from "./home/contact-section";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTimeout] = useState(12);

    useEffect(() => {
        document.title = "Home | Henry Library";

        AOS.init();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);

        document.addEventListener("scroll", () => {
            if (window.scrollY > 4600) {
                document.getElementById("home").style.transition = "all 0s";
                document.getElementById("home").style.backgroundColor = "#000";
                document.getElementById("footer-scale").style.opacity = "1";
                document
                    .getElementById("contact-section")
                    .classList.add("contact-scale");
                document
                    .getElementById("authors-section")
                    .classList.add("authors-scale");
            } else {
                document.getElementById("home").style.transition = "all 1s";
                document.getElementById("home").style.backgroundColor =
                    "#2b1717";
                document.getElementById("footer-scale").style.opacity = "0";
                document
                    .getElementById("contact-section")
                    .classList.remove("contact-scale");
                document
                    .getElementById("authors-section")
                    .classList.remove("authors-scale");
            }
        });
    });

    return (
        <div id="home" className="home">
            <Loader loaderTimeout={loadTimeout} />
            <BackToTop />
            <Header />
            {isLoaded && <HomeSection />}
            <TutorialSection />
            <ReadingSection />
            <ServicesSection />
            <BooksSection />
            <AuthorsSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
};

export default Home;
