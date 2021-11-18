import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import AboutUs from "./components/about-us";
import Login from "./components/login";
import Register from "./components/register";

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default routes;
