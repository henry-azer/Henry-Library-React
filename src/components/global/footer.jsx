import React from "react";

import Logo from "../..//resources/logo/light-logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div id="footer-scale">
                <div className="footer-wrapper">
                    <div className="logo">
                        <img src={Logo} className="logo-img" alt="logo" />
                    </div>
                    <div className="categories">
                        <h1>list</h1>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <h1>contact</h1>
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </div>
                <div className="info-wrapper">
                    <div className="sponsors">
                        <h1>Sponsors</h1>
                        <ul>
                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://www.ezra-jack-keats.org/wp-content/uploads/2020/08/Hachette_updated.jpeg"
                                    alt="hachette book group"
                                />
                            </li>

                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://internationalpublishers.org/images/aa-content/freedom-to-publish/freedom-to-publish-2018/simon-schuster-logotype.jpg"
                                    alt="hachette book group"
                                />
                            </li>
                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/769789-penguin-random-house-media-and-entertainment-azure/resources/df397d53-2b19-43ba-8b86-1b9ee9baea91/1219005212053586252_1219005212053586252"
                                    alt="hachette book group"
                                />
                            </li>
                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://getvectorlogo.com/wp-content/uploads/2018/12/harpercollins-publishers-vector-logo.png"
                                    alt="hachette book group"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <h1>Copyright ©2021 All rights reserved</h1>
                        <h1>Developed by: Henry Azer</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
