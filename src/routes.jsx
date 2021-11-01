import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default routes;
