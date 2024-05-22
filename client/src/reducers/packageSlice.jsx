import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../api/client";
export const getPackages = createAsyncThunk('/packages', async({rejectWithValue})=> {
    try {
        const response = await client.get('/find')
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});

export const getPackage = createAsyncThunk('/package', async(id, {rejectWithValue}) => {
    try {
       const response = await client.get(`/${id}`)
       return response.data.package
    } catch (error) {
        return rejectWithValue(error)
    }
})

const packageSlice = createSlice({
    name:"package",
    initialState:{
        packageInfo:{},
        packages:[]
    },
    reducers:{},
    extraReducers:(builder)=> {
        builder.addCase(getPackages.fulfilled, (state, action) => {
            state.packages = action.payload
        });
        builder.addCase(getPackage.fulfilled, (state, action) => {
            state.packageInfo = action.payload
        })
    }  
})

const packageReducer = packageSlice.reducer;
export default packageReducer;