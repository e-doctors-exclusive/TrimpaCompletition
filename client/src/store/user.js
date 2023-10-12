import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";




const initialState = {
  user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
  userToken: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null,
  loggedIn: localStorage.getItem('userToken') ? true : false,
}

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state,action) => {
      state.user = action.value ;
    },
    signup: (state , action) => {
      state.user ;
    },
    logout: (state, action) => {

    }
  },
});

export const { signup, login } = counterSlice.actions;

export default counterSlice.reducer;
