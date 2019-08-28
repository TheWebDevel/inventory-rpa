import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="mt-5">
        <Row>
          <Col>
            <Link to="#" className="nounderline">
              <Card bg="secondary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Inventory</Card.Header>
                <Card.Body>
                  <Card.Text>List of all inventory items</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/order" className="nounderline">
              <Card bg="secondary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Order Items</Card.Header>
                <Card.Body>
                  <Card.Text>Order Items for your Inventory</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="#" className="nounderline">
              <Card bg="secondary" text="white" style={{ width: "18rem" }}>
                <Card.Header>Report</Card.Header>
                <Card.Body>
                  <Card.Text>Reports for sales and inventory</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
