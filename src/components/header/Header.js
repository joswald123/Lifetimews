import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

// Assets
import "./Header.css";
import HeaderDropdown from "./HeaderDropdown";

export default function Header() {
  // add class "active"
  let activeClassName = "underline";

  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="mx-auto">
          <img
            alt=""
            src={logo}
            width="200"
            height="60"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Our Team
            </Nav.Link>

            {/* NavD*/}
            <HeaderDropdown/>            
            
            <Nav.Link
              as={NavLink}
              to="/businessRelationship"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Business Relationship
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/clientAccounts"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Client Accounts
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}