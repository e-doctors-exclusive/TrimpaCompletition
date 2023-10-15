import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
interface objType{
    destFrom:string
    destTo:string
    dateFrom:string

}

interface objTypeAll{
    destFrom:string
    destTo:string
    departDate:string
    arriveDate:string
}

export const fetchFlights = createAsyncThunk("/flights/destFrom/destTo/dateFrom",async(obj:objTypeAll)=>{
    const res = await axios.get(`http://localhost:1128/flights/getAll/${obj.destFrom}/${obj.destTo}/${obj.departDate}`)
    return res.data
})

export const fetchAllFlights = createAsyncThunk("/flights/getAll",async()=>{
    const res = await axios.get("http://localhost:1128/flights/getAll")
    
    return res.data
})



const FlightsSlice=createSlice({
    name:"Flights",
    initialState:{
        Flights:[],
        allFlights:[],
        currentFlight:{},
        error:null,
        loading:false
    },
    reducers:{
        selected:(state,action)=>{
            state.currentFlight = action.payload
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchFlights.fulfilled,(state,action)=>{
            state.Flights=action.payload
        })
        .addCase(fetchAllFlights.fulfilled,(state,action)=>{
            state.allFlights=action.payload
        })
    }
})
export const {selected} = FlightsSlice.actions
export default FlightsSlice.reducer