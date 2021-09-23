import React from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
                 <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button>Log In</Button>
                    <Button>Registry</Button>
                </ButtonGroup>
            </div>

            
        </nav>
    );
};

export default header;
