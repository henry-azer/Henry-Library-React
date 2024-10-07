import React from "react";

import Logo from "../..//resources/logo/light-logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="info-wrapper">
                    <div className="logo">
                        <img src={Logo} className="logo-img" alt="logo" />
                    </div>
                    <div className="sponsors">
                        <h1>Sponsors</h1>
                        <ul>
                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://www.ezra-jack-keats.org/wp-content/uploads/2020/08/Hachette_updated.jpeg"
                                    alt="book group"
                                />
                            </li>
                            <li>
                                <img
                                    className="sponsor-img"
                                    src="https://getvectorlogo.com/wp-content/uploads/2018/12/harpercollins-publishers-vector-logo.png"
                                    alt="book group"
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
