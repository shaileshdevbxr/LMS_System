import axios from "axios";
import { FREQUENT_QUESTION_API } from "../config/configUrl"


const headers = {
    "Content-Type": "application/json"
}

export const getAllFrequentQuestion = async () => {
    try {
        const requestUrl = FREQUENT_QUESTION_API;
        const response = await axios.get(requestUrl, headers);
        return response
    } catch (error) {
        console.log(error)
    }
}