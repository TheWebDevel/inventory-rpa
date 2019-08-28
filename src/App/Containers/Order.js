import React, { Component } from "react";
import { Form, Row, Col, Button, Dropdown, Table } from "react-bootstrap";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  handleAddToCart = e => {
    e.preventDefault();
    let form = e.target;
    if (
      form.elements.itemId.value.length &&
      form.elements.itemName.value.length &&
      form.elements.quantity.value.length
    ) {
      let cartObject = {
        itemId: form.elements.itemId.value,
        itemName: form.elements.itemName.value,
        quantity: form.elements.quantity.value
      };
      this.setState(state => {
        return { cart: [...state.cart, cartObject] };
      });
    }
  };

  placeOrder = () => {
    this.setState({
      cart: []
    });
    alert("Order Placed Successfully!");
  };

  renderCart = () => {
    if (this.state.cart.length) {
      return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cart.map((cartItem, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{cartItem.itemId}</td>
                  <td>{cartItem.itemName}</td>
                  <td>{cartItem.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button
            className="mt3"
            variant="primary"
            size="lg"
            block
            onClick={this.placeOrder}
          >
            Place Order
          </Button>
        </div>
      );
    } else {
      return <p className="text-center">Cart is Empty</p>;
    }
  };

  render() {
    return (
      <div>
        <h3 className="mt-5">Place an item to Cart</h3>
        <Form onSubmit={this.handleAddToCart}>
          <Row>
            <Col>
              <Form.Control name="itemId" placeholder="Item ID" />
            </Col>
            <Col>
              <Form.Control name="itemName" placeholder="Item Name" />
            </Col>
            <Col>
              <Form.Control
                name="quantity"
                type="number"
                placeholder="Quantity"
              />
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Form>
        <Dropdown.Divider className="mt-3" />
        <h3 className="mt-5">Cart</h3>
        {this.renderCart()}
      </div>
    );
  }
}
