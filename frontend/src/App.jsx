import { Routes, Route } from "react-router"
import { Outlet } from "react-router"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import PrivateRoute from "./components/PrivateRoute"

const Layout = () => {
    return (
        <>
            <Header />
            <ToastContainer />
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
                    <Route element={<PrivateRoute />}>
                        <Route path="/profile" element={<ProfileScreen />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
