
import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useProducts } from '../../contexts/ProductContext';
import logo from './images.png';

const Header = () => {
  const { history, getProductsData } = useProducts()
  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search)
    search.set('q', e.target.value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
  }

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
              <Nav.Link href="/productlist" >Catalog</Nav.Link>
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
              onChange={(e) => handleValue(e)}
            />
          </Form>
          <Button variant="secondary" style={{ marginLeft: '10px' }}>Log In</Button>
          <Button variant="primary" >Sign Up</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;