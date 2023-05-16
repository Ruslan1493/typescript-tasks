import axios from "axios";

const BASE_ENVIRONMENT_URL = "https://random-data-api.com/api/v2/users";
const BASE_SOCIAL_URL = "https://random-data-api.com/api/v2/addresses";
const BASE_GOVERNANCE_URL = "https://random-data-api.com/api/v2/banks";

export const getEnviromentData = async () => {
    try {
        const data = await axios.get(BASE_ENVIRONMENT_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}

export const getSocialData = async () => {
    try {
        const data = await axios.get(BASE_SOCIAL_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}

export const getGovernanceData = async () => {
    try {
        const data = await axios.get(BASE_GOVERNANCE_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}