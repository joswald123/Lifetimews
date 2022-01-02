import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'

// Assets
import './css/Header.css';

function Header() {

  // add class "active"
  let activeClassName = "underline"

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="mx-auto">
          <img
            alt=""
            src={logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              Our Team
            </Nav.Link>

            <NavDropdown title="What We Do" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/businees"
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              Businees Relationship
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/ClientAccount"
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              Client Accounts
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => isActive ? activeClassName : undefined}
            >
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
