import { configureStore} from "@reduxjs/toolkit"
import FlightsSlice from "./flights"
import flights from "./flights";

const store = configureStore({
    reducer:{
        flights:FlightsSlice
    }
})
console.log(flights);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch