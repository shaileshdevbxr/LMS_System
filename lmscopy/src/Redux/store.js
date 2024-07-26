import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/AuthSlice";
import SuccessStoriesReducer from "./slice/SuccessStoriesSlice"

export const store = configureStore({
    reducer:{
        auth: AuthReducer,
        successStories:SuccessStoriesReducer
    }
})