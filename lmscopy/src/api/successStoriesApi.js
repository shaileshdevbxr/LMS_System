import axios from "axios";
import { SUCCESS_STORIES_API } from "../config/configUrl"


export const fetchAllSuccessStories = async () =>{
    try {
        const requestUrl = SUCCESS_STORIES_API;
        const response = await axios.get(requestUrl, {
            "Content-Type":"application/json"
        })
        if(!response?.data == 200)return
        return response ;
    } catch (error) {
        console.log(error)
    }
}