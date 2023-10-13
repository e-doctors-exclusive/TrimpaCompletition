import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

interface bodyType {
    email: string,
    password: string
}
interface stateType{
    user : string,
    userToken: string,
    loggedIn : boolean
}
const initialState: stateType = {
    user: "",
    userToken: "",
    loggedIn: false
}

// export const userLoginSlice = createAsyncThunk("users/login", async (body: bodyType) => {
//     const log = await axios.post("http://localhost:1128/users/login", body)
//     return log.data

// })

// export const createUserSlice = createAsyncThunk("users/create", async (body) => {
//     const log = await axios.post("http://localhost:1128/users/register", body)
//     return log.data

// })
    const loginUser = createSlice({
        name: 'user',
        initialState,
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload
            },
            logout: (state) => {
                state.user = ""
                state.loggedIn = false
                localStorage.removeItem('userToken')
                localStorage.removeItem('user')
            },
            setLoggedIn: (state, action) => {
                const { token, loggedIn } = action.payload
                localStorage.setItem('userToken', JSON.stringify(token));
                state.userToken = token;
                state.loggedIn = loggedIn
            },
        },
        // extraReducers(builder) {
        //     builder.addCase(userLoginSlice.fulfilled, (state, action) => {
        //         state.user = action.payload
        //         localStorage.setItem('userToken', JSON.stringify(action.payload));

        //     })
        // }
    })



export const { setUser, logout, setLoggedIn } = loginUser.actions;
export default loginUser.reducer;
