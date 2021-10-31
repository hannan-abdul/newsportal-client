import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        item: []
    },
    reducers: {
        setcategories: (state, action) => {
            state.item = action.payload
        },
        filterCategories: (state, action) => {
            state.item = state.items.filter((item) => item.name === action.payload);
        }
    }
})