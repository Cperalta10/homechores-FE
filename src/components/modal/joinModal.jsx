import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import LogoutButton from "../../auth/logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import { join } from "../../utils/handleApi";

const JoinModal = (props) => {
    let history = useHistory();
    let { setModalShow, setFamily } = props;
    const { user } = useAuth0();
    const { picture } = user;

    const [joinModalShow, setJoinModalShow] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [familyCode, setFamilyCode] = useState("");
    const [relationship, setRelationship] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleFamilyCodeChange = (event) => {
        setFamilyCode(event.target.value);
    };

    const handleRelationshipChange = (event) => {
        setRelationship(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = { firstName, lastName, relationship, picture };

        join(familyCode, newUser, setFamily);

        // console.log("Submitted Data:", {
        //     firstName,
        //     familyCode,
        //     relationship,
        // });

        setFirstName("");
        setFamilyCode("");
        setRelationship("");

        setModalShow(false);
        history.push("/");
    };

    return (
        <div className="join-modal">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal"
                show={joinModalShow}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Join Family Group
                    </Modal.Title>
                    <LogoutButton />
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
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
                        <div>
                            <label htmlFor="familyCode">Family Code:</label>
                            <input
                                type="text"
                                id="familyCode"
                                value={familyCode}
                                onChange={handleFamilyCodeChange}
                                required
                            />
                        </div>
                        <div>
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
                        <button type="submit">Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <h2>
                        Want to create a Family group? click{" "}
                        <Link
                            to="/"
                            className="modal-btn"
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
        </div>
    );
};

export default JoinModal;
