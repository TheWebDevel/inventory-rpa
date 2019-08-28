import React, { Component } from "react";
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import ls from "local-storage";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      loginSuccess: null
    };
  }

  renderInvalidLoginAlert = () => {
    if (this.state.loginError) {
      return <Alert variant="danger">Invalid Email/ Password</Alert>;
    }
  };

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      loginError: false
    });
    let form = e.target;
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    if (email.length && password.length) {
      if (email === "admin@acme.com" && password === "password") {
        ls.set("loggedIn", true);
        this.setState({
          loginSuccess: "/"
        });
      } else {
        this.setState({
          loginError: true
        });
      }
    } else {
      this.setState({
        loginError: true
      });
    }
  };

  render() {
    if (this.state.loginSuccess) {
      return <Redirect to={this.state.loginSuccess} />;
    }
    return (
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col></Col>
          <Col>
            {this.renderInvalidLoginAlert()}
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
