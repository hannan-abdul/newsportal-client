import { categorySlice } from "../slice/catDataSlice";

const {actions: slice} = categorySlice;

export const getCategoriesAction = (item) => (dispatch)=>{
    dispatch(slice.setcategories(item))
}
