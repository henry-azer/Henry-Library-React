import React from "react";

import { Parallax } from "react-scroll-parallax";

import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const LeftNav = (props) => {
    
    const opacity = props.fadeOut;

    return (
        <div className="left-nav" style={{ opacity }}>
            <Parallax y={[0, -150]}>
                <div
                    className="social-container"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                    data-aos="fade-down-right"
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
            </Parallax>
        </div>
    );
};

export default LeftNav;
