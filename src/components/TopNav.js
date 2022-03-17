import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import "./comp.css"

const TopNav = () => {

    return (
            <Navbar collapseOnSelect expand="lg" sticky="top" className="topnav">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:"transparent"}}/>
                    <Navbar.Collapse id="responsive-navbar-nav"  style={{color:"red"}}>
                        <Nav className="me-auto" style={{color:"red"}}>
                            <a href="#about">About Me</a>
                            <a href="#skills">Skills</a>
                            <a href="#accomp">Accomplishments</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact Me</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default TopNav;