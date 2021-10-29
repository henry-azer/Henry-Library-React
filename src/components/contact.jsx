import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function ContactUs() {
    return (
        <section id="contact" className="contact">
            <div
                className="header-wrapper"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                <h1>Contact Us</h1>
                <h3>Reach out our social media accounts</h3>
            </div>
            <ul
                className="social-icons"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos="fade-up"
            >
                <li>
                    <FacebookIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/HeNaRyAzEr",
                                "_blank"
                            )
                        }
                    />
                </li>
                <li>
                    <WhatsAppIcon
                        className="social-icon"
                        onClick={() =>
                            window.open("https://wa.me/201207885279", "_blank")
                        }
                    />
                </li>
                <li>
                    <GitHubIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://github.com/Henry-Azer",
                                "_blank"
                            )
                        }
                    />
                </li>
                <li>
                    <LinkedInIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/henry-azer-1220121a7",
                                "_blank"
                            )
                        }
                    />
                </li>
                <li>
                    <EmailIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "mailto:henryazer@outlook.com",
                                "_blank"
                            )
                        }
                    />
                </li>
                <li>
                    <PhoneIcon
                        className="social-icon"
                        onClick={() =>
                            window.open("tel:+201207885279", "_blank")
                        }
                    />
                </li>
            </ul>
        </section>
    );
}

export default ContactUs;
