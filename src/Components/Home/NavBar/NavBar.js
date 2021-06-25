import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faSignInAlt,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";
import { createProvider } from "../../../App";

const NavBar = () => {
  const [user] = useContext(createProvider);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand as={Link} to="/" className="px-3 text-light menu-1">
        Book <FontAwesomeIcon className="menu-2" icon={faCog} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link as={Link} to="/" className="px-3 text-light menu-4">
            <FontAwesomeIcon className="menu-3 pr-1" icon={faHome} /> Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Dashboard"
            className="px-3 text-light menu-4"
          >
            <FontAwesomeIcon className="menu-3 pr-1" icon={faColumns} />{" "}
            Dashboard
          </Nav.Link>
          {user.email ? (
            <Nav.Link
              as={Link}
              to="/singIn"
              className="pl-3 pr-3 mr-2 text-light menu-4"
            >
              <FontAwesomeIcon className="menu-3 pr-1" icon={faSignInAlt} />
              {user.displayName}
            </Nav.Link>
          ) : (
            <Nav.Link
              as={Link}
              to="/singIn"
              className="pl-3 pr-3 mr-2 text-light menu-4"
            >
              <FontAwesomeIcon className="menu-3 pr-1" icon={faSignInAlt} />
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
