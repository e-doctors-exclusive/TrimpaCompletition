import { configureStore} from "@reduxjs/toolkit"
import FlightsSlice from "./flights"
import userLoginSlice from "./userSlicer"

export const store = configureStore({
    reducer:{
        flights:FlightsSlice,
        user : userLoginSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch