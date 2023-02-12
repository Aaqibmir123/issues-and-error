import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemSlice from "../store/addCartSlice";

const store = configureStore({
    reducer :{
        cart:cartSlice,
        items:itemSlice
    }
});

export default store;
