import React from "react";

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
                list
            </div>

            <div
                className="logo-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos="fade-down"
                data-aos-easing="ease-in"
            >
                <div to="/" className="logo">
                    Henry <em>Library</em>
                </div>
            </div>

            <div
                className="user-container"
                data-aos-delay="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in"
                data-aos="fade-down-left"
            >
                <button className="signIn-btn">Sign In</button>
                <button className="signUp-btn">Sign Up</button>
            </div>
        </nav>
    );
};

export default header;
