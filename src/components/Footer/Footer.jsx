import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home'
import InstagramIcon from '@material-ui/icons/Instagram';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#264659'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">Bang Bang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><HomeIcon color="secondary" /></Nav.Link>
            <Nav.Link target='blank' href="https://t.me/sanzharidze">Sanzharidze</Nav.Link>
            <Nav.Link target='blank' href="https://www.instagram.com/?hl=ru"> Eslichtoibahnul_1 <InstagramIcon /></Nav.Link>
            <Nav.Link target='blank' href="https://m.mobilelegends.com/en">More details</Nav.Link>
            <Nav.Link target='blank' href="https://www.youtube.com/watch?v=WW_bjlhHnQI">Game Music <MusicNoteIcon /></Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <NavDropdown.Item target='blank' href="https://ru.wikipedia.org/wiki/Mobile_Legends:_Bang_Bang">
                Wikipedia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target='blank' href="https://m.mobilelegends.com/en/gallery">Gallery Heroes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target='blank' href="https://www.bluestacks.com/ru/apps/action/mobile-legends-bang-bang-on-pc.html">Download</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target='blank' href="https://m.mobilelegends.com/en/rank">Heroes Rank</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;