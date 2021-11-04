import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    );
};

export default routes;
