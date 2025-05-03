import { Routes, Route } from "react-router"
import { Outlet } from "react-router"

import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
