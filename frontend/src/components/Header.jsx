import { Navbar, Nav, Container } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { Link } from "react-router"

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    {/* <Link to="/" style={{ textDecoration: "none" }}> */}
                    <Navbar.Brand as={Link} to="/">
                        Redux Template
                    </Navbar.Brand>
                    {/* </Link> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/login">
                                <FaSignInAlt /> Sign In
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                <FaSignOutAlt /> Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
