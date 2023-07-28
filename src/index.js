import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

import Landingpage from "./pages/landingpage/landingpage";
import LoadingPage from "./pages/laodingpage/loadingpage";
import HomePage from "./pages/homepage/homepage";
import JoinModal from "./components/modal/joinModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <React.StrictMode>
            <Auth0ProviderWithHistory>
                <App />
            </Auth0ProviderWithHistory>
        </React.StrictMode>
    </Router>
);

export function App() {
    const [modalShow, setModalShow] = useState(true);
    const [family, setFamily] = useState("");
    const { isLoading, isAuthenticated, user } = useAuth0();

    // if (user) {
    // } thisis to check if user is logged in already and has a group family by chekcing user familycode exist or not

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        return <Landingpage />;
    }

    return (
        <div>
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <HomePage
                            modalShow={modalShow}
                            setModalShow={setModalShow}
                            family={family}
                            setFamily={setFamily}
                        />
                    )}
                />
                <Route
                    path="/join"
                    render={() => (
                        <JoinModal
                            setModalShow={setModalShow}
                            setFamily={setFamily}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}
