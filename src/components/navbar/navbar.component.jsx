import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Button from 'react-bootstrap/Button';
import './navbar.styles.scss';

const Navigation = () => (
 <Navbar collapseOnSelect expand="lg" bg="light" variant='light'>
    <Navbar.Brand href="/">
        <img
        src={require("../../logo.svg")}
        width="30"
        height="30"
        className="d-inline-block align-top ki-logo"
        alt="Devonauts Logo"
        />    {' '}Devonauts
    </Navbar.Brand>
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
          {' '}
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="" variant='button' >
      <button className='register'>REGISTER</button>
      </Nav>
    </Navbar.Collapse>
 </Navbar>   
)
export default Navigation;