import Header from "./components/Header"
import { Outlet } from "react-router"
import { Container } from "react-bootstrap"

function App() {
    return (
        <>
            <Header />
            <Container className="my-2">
                <Outlet />
            </Container>
            {/* <HomeScreen /> */}
        </>
    )
}

export default App
