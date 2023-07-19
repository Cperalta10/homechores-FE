import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Landingpage from "./pages/landingpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>
);

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landingpage />} />
            </Routes>
        </div>
    );
}
