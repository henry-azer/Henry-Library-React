import React, { useState, useEffect } from "react";

import AOS from "aos";

import Loader from "./loader";
import Header from "./header";
import Footer from "./footer";
import ContactUs from "./contact";

import HomeSection from "./home/home-section";
import TutorialSection from "./home/tutorial-section";
import ReadingSection from "./home/reading-section";
import ServicesSection from "./home/services-section";
import BooksSection from "./home/books-section";
import AuthorsSection from "./home/authors-section";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadTimeout] = useState(12000);

    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);

        document.addEventListener("scroll", () => {
            if (window.scrollY > 1000 && window.scrollY < 2500) {
                document.body.style.backgroundColor = "black";
            } else {
                document.body.style.backgroundColor = "rgba(39, 20, 20, 0.97)";
            }
        });
    });

    return (
        <div className="home">
            <Loader loaderTimeout={loadTimeout} />
            <Header />
            {isLoaded && <HomeSection />}
            <TutorialSection />
            <ReadingSection />
            <ServicesSection />
            <BooksSection />
            <AuthorsSection />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;
