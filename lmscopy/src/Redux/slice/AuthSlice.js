import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosinstance from "../../Helpers/axiosinstance";
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API } from "../../config/configUrl";

const initialState = {
    // isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem('role') || '',
    data: localStorage.getItem('data') || {}
}
const headers = {
    "Content-Type": "application/json",
    "X-author": "Shailesh Maurya"
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createAccount.fulfilled, (state, action) => {
                // localStorage.setItem("isLoggedIn", true);
                console.log(action?.payload?.data)
                localStorage.setItem("role", "user");
                localStorage.setItem("data", JSON.stringify(action?.payload?.data));
                state.isLoggedIn = true
                state.data = action?.payload?.data
                state.role = "user"
            }).addCase(createAccount.pending, (state, action) => {
                
            })
    }
})

 const createAccount = createAsyncThunk("/user/signup", async (data) => {
    console.log('hii')
    const requestUrl = USER_API;
    try {
        const response = axios.post(requestUrl + "/user/signup", data, headers);
        toast.promise(response, {
            loading: "Wait! Create your account.",
            success: (data) => {
                return data?.status == 200 && data?.message
            },
            error: "Failed to create account!"
        })
        // console.log()
        return await response
    } catch (err) {
        console.log(err)
        toast.error("Something went wrong!");
    }
})

export const verifyToken = createAsyncThunk('/verifyToken', async (token) => {
    try {
        const response = await axiosinstance.post('/verifyToken', {}, {
            headers: {
                Authorization: `Bearer${token}`
            }
        })
        toast.promise(response, {
            loading: "Please Wait Verify Your Token!",
            success: (response) => {
                return response?.data?.success && "Verify Token Successfully!"
            },
            error: "Faild Token Verify!"
        })
    } catch (error) {
        toast.error("Faild Token Verify!")
    }
})




export default authSlice.reducer