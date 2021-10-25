import { createSlice } from '@reduxjs/toolkit';

export const catSlice = createSlice({
    name: 'catdata',
    initialState: {
        catnewsdetails: []
    },
    reducers: {
        setcatdata: (state, action) => {
            state.catnewsdetails = action.payload
        },
    }
})