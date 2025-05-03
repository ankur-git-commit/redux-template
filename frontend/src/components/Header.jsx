import { Navbar, Nav, Container } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Redux Template</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/login">
                                <FaSignInAlt /> Sign In
                            </Nav.Link>
                            <Nav.Link href="/register">
                                <FaSignOutAlt /> Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
