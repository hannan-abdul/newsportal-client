import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { newsSlice } from "../slice/newsDataSlice";
import { categorySlice } from "../slice/catDataSlice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    newsdata: newsSlice.reducer,
    categories: categorySlice.reducer,
})