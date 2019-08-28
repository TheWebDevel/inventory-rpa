import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header";
import NonAuthenticator from "./NonAuthenticator";

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <NonAuthenticator>
        <Header />
        <Component {...props} />
      </NonAuthenticator>
    )}
  />
);

export default Public;
