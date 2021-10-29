import React, { useEffect } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTop() {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.getElementById("back-to-top").style.opacity = "1";
            } else {
                document.getElementById("back-to-top").style.opacity = "0";
            }
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div
            id="back-to-top"
            data-aos-delay="80"
            data-aos-duration="1000"
            data-aos="fade-left"
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon className="arrow-upward" />
        </div>
    );
}

export default BackToTop;
