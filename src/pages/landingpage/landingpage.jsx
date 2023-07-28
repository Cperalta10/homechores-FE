import React from "react";
import Logo from "../../img/LogoMakr-9pYpYa.png";
import "./landingpage.css";
import AuthenticationButton from "../../auth/authentication-button";

const landingpage = () => {
    return (
        <div className="landingpage">
            <img src={Logo} alt="logo" width={300} />
            <h1 className="lp-h1">HomeChores</h1>
            <AuthenticationButton />
        </div>
    );
};

export default landingpage;
