import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { Link, useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { useLogoutMutation } from "../slices/usersApiSlice"
import { clearCredentials } from "../slices/authSlice"

function Header() {
    const { userInfo } = useSelector((state) => state.auth)
    const [logoutApiCall] = useLogoutMutation()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(clearCredentials())
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Redux Template
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                    <NavDropdown
                                        title={userInfo.name}
                                        id="username"
                                    >
                                        <NavDropdown.Item
                                            as={Link}
                                            to="/profile"
                                        >
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        <FaSignInAlt /> Sign In
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        <FaSignOutAlt /> Register
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
