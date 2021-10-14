import React, { useState, useEffect, useRef } from "react";

import Button from "@mui/material/Button";

import Logo from "..//resources/logo/logo.png";
import LightLogo from "..//resources/logo/light-logo.png";

const Header = () => {
    const prevScrollY = useRef(0);

    const [headerToggle, setHeaderToggle] = useState("header");
    const [headerLogo, setHeaderLogo] = useState(LightLogo);
    const [scrollingUp, setScrollingUp] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let activeClass = "header";
            let activeLogo = LightLogo;
            if (window.scrollY >= 160) {
                activeClass = "header header-toggle";
                activeLogo = Logo;
            }
            setHeaderToggle(activeClass);
            setHeaderLogo(activeLogo);
        });
    }, [scrollingUp]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && scrollingUp) {
                setScrollingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !scrollingUp) {
                setScrollingUp(true);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollingUp]);

    return (
        <nav className={headerToggle}>
            <div
                className="list-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-down-right"
                data-aos-easing="ease-in"
            >
                <Button className="item">Feed</Button>
                <Button className="item">Library</Button>
                <Button className="item">About us</Button>
            </div>

            <div
                className="logo-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-down"
                data-aos-easing="ease-in"
            >
                <div
                    to="/"
                    className="logo"
                >
                    <img src={headerLogo} alt="henry library"/>
                </div>
            </div>

            <div
                className="user-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
                data-aos="fade-down-left"
            >
                <Button className="login-btn">Log In</Button>
                <Button className="register-btn">Registry</Button>
            </div>
        </nav>
    );
};

export default Header;
