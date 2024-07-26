import axios from "axios";
import { USER_API } from "../config/configUrl";
// import axiosinstance, { BASE_URL } from "../Helpers/axiosinstance";

const headers = {
    "Content-Type": "application/json",
    "X-author": "Shailesh Maurya"
}

export async function createAccount(data) {
    const requestUrl = USER_API;
    try {
        const response = await axios.get(requestUrl, headers);
        console.log(response)
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const verifyToken = async (token) => {
    try {
        const requestUrl = BASE_URL + '/verifyToken'
        const response = axios.post(requestUrl, {}, {headers:{Authorization:`Bearer${token}`}})
        return response
    } catch (error) {
        return {data:[]}
    }
}