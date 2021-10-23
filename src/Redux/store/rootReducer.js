import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { newsSlice } from "../slice/newsDataSlice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    newsdata: newsSlice.reducer,
})