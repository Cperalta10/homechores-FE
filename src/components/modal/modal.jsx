import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import LogoutButton from "../../auth/logout-button";
import Randomstring from "randomstring";
import { useAuth0 } from "@auth0/auth0-react";

import { signup } from "../../utils/handleApi";

const MyVerticallyCenteredModal = (props) => {
    const { setModalShow, family, setFamily } = props;
    const { user } = useAuth0();
    const { picture } = user;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [relationship, setRelationship] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleFamilyNameChange = (event) => {
        setFamilyName(event.target.value);
    };

    const handleRelationshipChange = (event) => {
        setRelationship(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let familyCode = Randomstring.generate(10);

        const newUser = { firstName, lastName, relationship, picture };

        signup(familyName, familyCode, newUser, setFamily);

        // console.log("Submitted Data:", {
        //     firstName,
        //     lastName,
        //     familyName,
        //     familyCode,
        //     relationship,
        // });

        setFirstName("");
        setLastName("");
        setFamilyName("");
        setRelationship("");
        setModalShow(false);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Family Group
                </Modal.Title>
                <LogoutButton />
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="familyName">Family Name:</label>
                        <input
                            type="text"
                            id="familyName"
                            value={familyName}
                            onChange={handleFamilyNameChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="name">Last Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="relationship">
                            Relationship to Family:
                        </label>
                        <select
                            id="relationship"
                            value={relationship}
                            onChange={handleRelationshipChange}
                            required
                        >
                            <option value="" disabled>
                                Select a relationship
                            </option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Son">Son</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Aunt">Aunt</option>
                            <option value="Cousin">Cousin</option>
                            <option value="Guest">Guest</option>
                        </select>
                    </div>
                    <button className="submit-btn" type="submit">
                        Submit
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <h2>
                    Family member already created one? click{" "}
                    <Link
                        to="/join"
                        className="modal-btn"
                        onClick={() => setModalShow(false)}
                        // style={{
                        //     background: "white",
                        //     textDecoration: "none",
                        //     border: "solid 2px black",
                        //     padding: "0.375em 1.125em",
                        //     fontSize: "1rem",
                        // }}
                    >
                        Here
                    </Link>
                </h2>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
