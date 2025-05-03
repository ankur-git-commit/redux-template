import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "./App.jsx"
import HomeScreen from "./screens/HomeScreen.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)
