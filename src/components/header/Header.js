import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

// NavDropdown Services - What we do
import { getAllServices, getServicesTitle } from "../../data/services/services";

// Assets
import "./Header.css";

export default function Header() {
  // close menu
  const [expanded, setExpanded] = useState(false);

  // add class "active"
  let activeClassName = "underline";

  // NavDropdown Services - What we do
  const servicesTitle = getServicesTitle();
  const services = getAllServices();

  return (
    <header className="sticky-top">
      <Navbar expanded={expanded} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="mx-auto">
            <img
              alt=""
              src={logo}
              width="240"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Our Team
              </Nav.Link>


              {/*  */}
              <NavDropdown title={servicesTitle} id="basic-nav-dropdown" >
                <NavDropdown.Item
                  as={NavLink}
                  onClick={() => setExpanded(false)}
                  to="/services"
                >
                  All Services
                </NavDropdown.Item>
                
                {services.map((dat) => (
                  <NavDropdown.Item
                    as={NavLink}
                    onClick={() => setExpanded(false)}
                    key={dat.id}
                    to={"/services/" + dat.link}
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    {dat.title}
                  </NavDropdown.Item>
                ))}

              </NavDropdown>
              {/*  */}


              <Nav.Link
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/businessRelationship"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Business Relationship
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                onClick={() => setExpanded(false)}
                to="/clientAccounts"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Client Login
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                onClick={() => setExpanded(false)}
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
    </header>
  );
}