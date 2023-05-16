import axios from 'axios';
import { BASE_URL } from '../api/index';

const ENVIRONMENT_URL = "users";
const SOCIAL_URL = "addresses";
const GOVERNANCE_URL = "banks";

export const getUser = async (numberOfUsers = 1) => {
    try {
        const data = await axios.get(BASE_URL + ENVIRONMENT_URL + `?size=${numberOfUsers}`)
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}

export const getEnviromentData = async () => {
    try {
        const data = await axios.get(BASE_URL + ENVIRONMENT_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}

export const getSocialData = async () => {
    try {
        const data = await axios.get(BASE_URL + SOCIAL_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}

export const getGovernanceData = async () => {
    try {
        const data = await axios.get(BASE_URL + GOVERNANCE_URL + '?size=10');
        return data;
    } catch (err) {
        console.log("error: ", err);
    }
}