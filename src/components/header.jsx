import React from "react";

import Logo from "..//resources/logo/light-logo.png";

import Button from "@mui/material/Button";

const header = () => {
    return (
        <nav className="header">
            <div
                className="list-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-down-right"
                data-aos-easing="ease-in"
            >
                <Button className="item" >Feed</Button>
                <Button className="item" >Library</Button>
                <Button className="item" >About us</Button>
            </div>

            <div
                className="logo-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-down"
                data-aos-easing="ease-in"
            >
                <div to="/" className="logo">
                    <img
                        src={Logo}
                        draggable="false"
                        alt="henry library"
                        className="logo-pic"
                    />
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

export default header;
