import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/LogoMakr-6ifdoQ.png";
import AuthenticationButton from "../../auth/authentication-button";

const Header = () => {
    return (
        <header>
            <div className="hrf-logo">
                <a href="/">
                    <img
                        width={100}
                        src={Logo}
                        // preview={false}
                        alt="HomeChores Logo"
                    />
                </a>
                <h1>HomeChores</h1>
            </div>
            <div className="nav">
                <Link
                    to="/"
                    className="btn"
                    // style={{
                    //     background: "white",
                    //     textDecoration: "none",
                    //     border: "solid 2px black",
                    //     padding: "0.375em 1.125em",
                    //     fontSize: "1rem",
                    // }}
                >
                    Home
                </Link>
                <AuthenticationButton />
            </div>
        </header>
    );
};

export default Header;
