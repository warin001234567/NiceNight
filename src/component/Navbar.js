import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../static/logo.png";
import { Link } from "react-router-dom";
// import {} from 'react'

const NavbarUI = (props) => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: "7vh" }}>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        NiceNight
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="/" active={props.value === "1" ? true : false}>
            Home
          </Nav.Link>
        </Link>
        <Link to="/history">
          <Nav.Link active={props.value === "2" ? true : false} href="#History">
            History
          </Nav.Link>
        </Link>
        <Link to="/suggest">
          <Nav.Link
            active={props.value === "3" ? true : false}
            href="../page/Suggest.js"
          >
            Suggest
          </Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarUI;
