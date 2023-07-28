import React, { useState, useEffect } from "react";
import "./homepage.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import SideInfo from "../../components/sideinfo/sideInfo";
import Footer from "../../components/footer/footer";
import MyVerticallyCenteredModal from "../../components/modal/modal";
import { useAuth0 } from "@auth0/auth0-react";

const Homepage = (props) => {
    const { modalShow, setModalShow, family, setFamily } = props;
    const [joinModalShow, setJoinModalShow] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    if (modalShow) {
        return (
            <>
                <MyVerticallyCenteredModal
                    className="modal"
                    show={modalShow}
                    setModalShow={setModalShow}
                    joinModalShow={joinModalShow}
                    setJoinModalShow={setJoinModalShow}
                    family={family}
                    setFamily={setFamily}
                    // onHide={() => setModalShow(false)}
                />
            </>
        );
    }

    return (
        <div className="container">
            <Header></Header>
            <SideInfo family={family}></SideInfo>
            <Sidebar></Sidebar>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;
