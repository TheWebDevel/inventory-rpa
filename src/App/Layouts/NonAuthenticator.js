import React, { Component } from "react";
import ls from "local-storage";
import { Redirect } from "react-router-dom";

export default class NonAuthenticator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectUrl: null
    };
    this.loggedIn = ls.get("loggedIn");
  }

  componentDidMount = () => {
    console.log("Non");
    if (this.loggedIn) {
      console.log("logged in");
      this.setState({
        redirectUrl: "/"
      });
    }
  };

  render() {
    if (this.state.redirectUrl) {
      return <Redirect to={this.state.redirectUrl} />;
    }
    return <div>{this.props.children}</div>;
  }
}
