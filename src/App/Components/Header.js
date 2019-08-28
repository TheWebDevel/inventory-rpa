import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ls from "local-storage";
import { Redirect } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = ls.get("loggedIn");
    this.state = {
      logoutSuccess: null
    };
  }

  handleLogout = () => {
    ls.set("loggedIn", false);
    this.setState({
      logoutSuccess: "/login"
    });
  };

  renderLogutButton = () => {
    if (this.loggedIn) {
      return (
        <Nav.Link eventKey={2} href="#" onClick={this.handleLogout}>
          Logout
        </Nav.Link>
      );
    } else {
      return (
        <Nav.Link eventKey={2} href="/login">
          Login
        </Nav.Link>
      );
    }
  };
  render() {
    if (this.state.logoutSuccess) {
      return <Redirect to={this.state.logoutSuccess} />;
    }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Inventory Control System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>{this.renderLogutButton()}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
