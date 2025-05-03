import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"

import store from "./store.js"
import { Provider } from "react-redux"

// Components
import App from "./App.jsx"

// CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    </Provider>
)
