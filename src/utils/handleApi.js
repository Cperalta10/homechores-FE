import axios from "axios";

const baseUrl = "http://localhost:9000";

const signup = (familyName, familyCode, newUser, setFamily) => {
    axios
        .post(`${baseUrl}/api/signup`, { familyName, familyCode, newUser })
        .then((data) => {
            setFamily(data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const join = (familyCode, newUser, setFamily) => {
    axios
        .post(`${baseUrl}/api/join`, { familyCode, newUser })
        .then((data) => {
            setFamily(data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

export { signup, join };
