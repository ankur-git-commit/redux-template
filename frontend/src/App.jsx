import { Routes, Route } from "react-router"

import Header from "./components/Header"
import { Outlet } from "react-router"
import HomeScreen from "./screens/HomeScreen"

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
                </Route>
            </Routes>
        </>
    )
}

export default App
