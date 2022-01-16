import React from "react";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getAllServices, getServicesTitle } from "../../data/services/services";

export default function HeaderDropdown() {
  let activeClassName = "underline";
  const servicesTitle = getServicesTitle();
  const services = getAllServices();

  return (
    <NavDropdown title={servicesTitle} id="basic-nav-dropdown" >
      {services.map((dat) => (
        <NavDropdown.Item
          as={NavLink}
          key={dat.id}
          to={"/services/" + dat.link}
          className={({ isActive }) =>
            isActive ? activeClassName : undefined
          }
        >
          {dat.title}
        </NavDropdown.Item>
      ))}
      <NavDropdown.Item
          as={NavLink}
          to="/services"
        >
          All Services
        </NavDropdown.Item>
    </NavDropdown>
  );
}