import axios from "axios";
import { BASE_URL_COURSDETAIL } from "../config/configUrl"
import { useState } from "react";

export const getAllCourseDetail = async () => {
    try {
        const requestUrl = BASE_URL_COURSDETAIL;
        const response = await axios.get(requestUrl, {
            "Content-Type": "application/json"
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export const getCourseById = async (courseId) => {
    try {
        const requestUrl = BASE_URL_COURSDETAIL;
        const response = await axios.get(requestUrl + "/" + courseId);
        return response;
    } catch (err) {
        return { data: [] }
        // console.log(err)
    }
}
export const getCourseByFilterQuery = async (filterQuery) => {
    try {
        const requestUrl = BASE_URL_COURSDETAIL;
        const response = await axios.get(requestUrl, {
            "Content-Type" : "application/json"
        });
        // console.log(filterQuery)
        const filter = response?.data.filter((data) => data.filter_by_user[filterQuery]);
        return await filter;
    } catch (error) {
        return {
            data: []
        }
    }
}