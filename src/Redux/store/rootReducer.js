import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { newsSlice } from "../slice/newsDataSlice";
import { catSlice } from "../slice/catDataSlice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    newsdata: newsSlice.reducer,
    catData: catSlice.reducer,
})