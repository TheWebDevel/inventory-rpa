import React from "react";
import { Route } from "react-router-dom";
import Header from "../Components/Header";
import AppLayout from "../Components/AppLayout";
import Authenticator from "./Authenticator";

const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Authenticator>
        <Header />
        <AppLayout>
          <Component {...props} />
        </AppLayout>
      </Authenticator>
    )}
  />
);

export default Private;
