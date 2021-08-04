
import React, { Component } from 'react';
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import logo from './images.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="#"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/catalog">Catalog</Nav.Link>
                <Nav.Link href="/brend">Brend</Nav.Link>
                <Nav.Link href="/sale">Sale</Nav.Link>
                <Nav.Link href="/stock">Stock</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-4"
                
              />
            </Form>
          </Container>
        </Navbar>
      </>
    );
  }
}
