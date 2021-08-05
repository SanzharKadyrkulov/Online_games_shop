
import React from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductContext';
import BoopButton from '../../Song/Song';
import Song from '../../Song/Song';
import logo from './images.png';

const Header = () => {
  const { history, getProductsData } = useProducts()
  const { user, logout } = useAuth()

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search)
    search.set('q', e.target.value)
    search.set('_page', 1)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProductsData()
  }
  useEffect(() => {
    console.log(user);
  }, [user])
  const handleLogout = () => {
    logout()
  }

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
              <Song />
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/productlist" >Catalog</Nav.Link>
              <Nav.Link href="/chat">Chat</Nav.Link>
              <Nav.Link href="/sale">Sale</Nav.Link>
              <Nav.Link href="/cart">Busket</Nav.Link>
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
          {user ? (<>
            <div style={{ color: 'white', margin: '10px', border: '1px solid white', padding: '5px', borderRadius: '5px' }}>{user.email}</div>
            <Button onClick={handleLogout} variant="primary" >Log Out</Button>
          </>)
            :
            (<>
              <Button onClick={() => history.push('/login')} variant="secondary" style={{ marginLeft: '10px' }}>Log In</Button>
              <Button onClick={() => history.push('/registration')} variant="primary" >Sign Up</Button>
            </>)

          }
        </Container>
      </Navbar>
    </>
  );
}

export default Header;