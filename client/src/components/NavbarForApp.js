import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../img/1.png";

const NavbarForApp = () => {

    return (
        <div>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand className="brand">
                        <img
                            alt=""
                            src={logo}
                            width="180"
                            height="60"
                            className="d-inline-block align-top"
                        />{" "}
                        <span className="nameWithLogo">Crypto Home</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarForApp;