import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routesFile";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map((route) => (
                            <li>
                                <NavLink
                                    key={route.to}
                                    to={route.to}
                                    activeClassName="nav-active"
                                    exact
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Switch>
                    {routes.map((route) => (
                        <Route key={route.to} path={route.path}>
                            {route.Component()}
                        </Route>
                    ))}
                </Switch>
            </div>
        </Router>
    );
};
