import { catSlice } from "../slice/catDataSlice";

const {actions: slice} = catSlice;

export const catAction = (allnewsdetails) => (dispatch)=>{
    dispatch(slice.setcatdata(allnewsdetails))
}