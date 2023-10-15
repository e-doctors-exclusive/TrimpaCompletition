import { createSlice } from "@reduxjs/toolkit";

interface init {
    user: any,
    userToken : string,
    loggedIn: boolean
}

const initialState = {
    user: {},
    userToken :"" ,
    loggedIn: false,
}


export const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:  (state , action)=>{
            const {user} = action.payload;
            state.user = user
        },
        logout: (state)=>{
            state.user = "" 
            state.loggedIn = false
            localStorage.removeItem('userToken')
        },
        setLoggedIn: (state, action)=>{
            const {token , loggedIn} = action.payload
            localStorage.setItem('userToken', JSON.stringify(token));
            state.userToken = token;
            state.loggedIn = loggedIn
        }
    }
})


export const { setUser, logout, setLoggedIn } = userSlicer.actions
export default userSlicer.reducer
