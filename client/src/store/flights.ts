import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
interface objType{
    destFrom:string
    destTo:string
    dateFrom:Date

}

export const fetchFlights = createAsyncThunk("/flights/destFrom/destTo/dateFrom",async(obj:objType)=>{
    const res = await axios.get(`http://localhost:1128/flights/${obj.destFrom}/${obj.destTo}/${obj.dateFrom}`)
    return res.data
})

const FlightsSlice=createSlice({
    name:"Flights",
    initialState:{
        Flights:[],
        error:null,
        loading:false
    },
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchFlights.fulfilled,(state,action)=>{
            state.Flights=action.payload
        })
    }
})
export default FlightsSlice.reducer