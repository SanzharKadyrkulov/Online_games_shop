import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home'
import InstagramIcon from '@material-ui/icons/Instagram';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#264659' }} variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mortal Kombat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><HomeIcon color="secondary" /></Nav.Link>
            <Nav.Link target='blank' href="https://www.instagram.com/?hl=ru"> Eslichtoibahnul_1 <InstagramIcon /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;