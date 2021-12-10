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
        AOS.init();
        document.title = "Home | Henry Library";

        setTimeout(() => {
            setIsLoaded(true);
        }, loadTimeout);

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
