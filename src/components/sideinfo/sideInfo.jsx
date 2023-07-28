import React from "react";
import "./sideinfo.css";
import defaultHomeImg from "../../img/LogoMakr-7uLjjW.png";
import BarLoader from "react-spinners/BarLoader";

const SideInfo = (props) => {
    const { family } = props;
    console.log(family);

    if (!family) {
        return (
            <div className="sideinfo">
                <BarLoader className="loading" color="white" />
            </div>
        );
    }

    return (
        <div className="sideinfo">
            <div className="info-header">
                <img src={defaultHomeImg} alt="profile-pic" height="50px" />
                <h2>{family.familyName} Household</h2>
            </div>
            <div className="family">
                {family.members.map((member, idx) => {
                    return (
                        <div className="member" key={idx}>
                            <img
                                src={member.picture}
                                alt="profile-pic"
                                height="30px"
                            />
                            <h3>{member.firstName + " " + member.lastName}</h3>
                            <p>({member.relationship})</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideInfo;
