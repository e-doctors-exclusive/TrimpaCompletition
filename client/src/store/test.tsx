// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import type { PayloadAction } from "@reduxjs/toolkit";
// interface DataItem {
//     name: string,
//     stockNumber: number,
//     price: number,
//     rate: number,
//     desc:string,
//     category: string,
//     state: string
//   }

// const fetchData= createAsyncThunk <DataItem[], void> ("data/fetchData", async () => {
//     try {
//         const response = await axios.get("http://localhost:1128");
//      return response.data;
//     } catch (err) {
//          return err
//     }
// });

// const addData = createAsyncThunk("data/postdata", async (body) => {
//     try {
//         const response = await axios.post("http://localhost:1128", body);
//   return response.data;
//     } catch (err) {
//          return err
//     }
  
// });

// interface StateType {
//     data: DataItem[] | null;
//     loading: boolean;
//     error: Error | null;
//   }

//   const initialState: StateType = {
//     data: null,
//     loading: false,
//     error: null,
//   };

// const dataSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchData.fulfilled, (state, action: PayloadAction<DataItem[]>) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchData.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

// const postSlice = createSlice({
//   name: "postdata",
//   initialState: { data: null, loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(addData.rejected, (state, action) => {
//         state.loading = false;
//       });
//   },
// });

// export { addData, fetchData } 
// export default { dataSlice:dataSlice.reducer, postSlice:postSlice.reducer };
