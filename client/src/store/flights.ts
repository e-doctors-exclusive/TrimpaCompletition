import axios from "axios"
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
interface objType{
    destFrom:string
    destTo:string
    dateFrom:string

}



export const fetchFlights = createAsyncThunk("/flights/destFrom/destTo/dateFrom",async(obj:objType)=>{
    const res = await axios.get(`http://localhost:1128/flights/getAll/${obj.destFrom}/${obj.destTo}/${obj.dateFrom}`)
    console.log(res.data,"this is from store")
    return res.data
})

export const fetchAllFlights  = createAsyncThunk("/flights/getAll",async()=>{
    const res = await axios.get("http://localhost:1128/flights/getAll")
    return res.data
})



const FlightsSlice=createSlice({
    name:"Flights",
    initialState:{
        Flights:[],
        allFlights:[],
        error:null,
        loading:false
    },
    reducers:{

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
export default FlightsSlice.reducer