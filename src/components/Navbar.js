import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

export default function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                <Link to="/" className="navbar-brand">
                    Tarek Ahmed
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link to="/resume" className="nav-link">
                            Resume
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
