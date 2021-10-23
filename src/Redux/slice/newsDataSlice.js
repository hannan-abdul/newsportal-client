import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
    name: 'newsdata',
    initialState: {
        allnewsdetails: []
    },
    reducers: {
        setnewsdata: (state, action) => {
            state.allnewsdetails = action.payload
        },
    }
})