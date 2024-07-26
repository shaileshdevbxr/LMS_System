import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SUCCESS_STORIES_API } from "../../config/configUrl";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
    successStoriesData: []
}

const successStoriesDataSlice = createSlice({
    name: "successStories",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuccessStories.fulfilled, (state, action) => {
                state.successStoriesData = action.payload
            })
            .addCase(fetchSuccessStories.pending, (state, action) => {
                toast.promise(fetchSuccessStories, {
                    loading: "Proccessing !"
                })
            })

    }
})

export const fetchSuccessStories = createAsyncThunk("successstories/fetch", async () => {
    try {
        const requestUrl = SUCCESS_STORIES_API + "/successstories";
        const response = await axios.get(requestUrl, { "Content-Type": "application/json" });
        // toast.promise(response, {
        //     loading:"Proccessing !",
        //     success:"Success Stories loaded successfully!"
        // })
        console.log(response)

        // if (!response?.status == 200) return;
        return await response
    } catch (error) {
        console.log(error)
    }
})

export default successStoriesDataSlice.reducer;