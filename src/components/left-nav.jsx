import React from "react";

import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const LeftNav = () => {
    return (
        <div className="left-nav">
            <div
                className="social-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-right"
                data-aos-easing="ease-in"
            >
                <Button className="social-btn">
                    <GitHubIcon className="social-icon" />
                </Button>
                <Button className="social-btn">
                    <LinkedInIcon className="social-icon" />
                </Button>
                <Button className="social-btn">
                    <FacebookIcon className="social-icon" />
                </Button>
            </div>
        </div>
    );
};

export default LeftNav;
