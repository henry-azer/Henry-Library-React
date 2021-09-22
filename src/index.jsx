import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "aos/dist/aos.css";
import "./styles/styles.css";
import "./styles/home-background.css";

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root")
);
