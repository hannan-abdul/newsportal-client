import { newsSlice } from "../slice/newsDataSlice";

const {actions: slice} = newsSlice;

export const newsAction = (allnewsdetails) => (dispatch)=>{
    dispatch(slice.setnewsdata(allnewsdetails))
}
