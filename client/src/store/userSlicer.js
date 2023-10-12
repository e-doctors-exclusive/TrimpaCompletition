// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).user : null,
//     userToken : localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')).userToken : null,
//     loggedIn: localStorage.getItem('userToken') ? true : false,
// }


// export const userSlicer = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser:  (state , action)=>{
//             state.user = action.payload
//         },
//         logout: (state)=>{
//             state.user = null 
//             state.loggedIn = false
//             localStorage.removeItem('userToken')
//             localStorage.removeItem('user')
//         },
//         setLoggedIn: (state, action)=>{
//             const {token , loggedIn} = action.payload
//             localStorage.setItem('userToken', JSON.stringify(token));
//             state.userToken = token;
//             state.loggedIn = loggedIn
//         }
//     }
// })


// export const { setUser, logout, setLoggedIn } = userSlicer.actions
// export default userSlicer.reducer
