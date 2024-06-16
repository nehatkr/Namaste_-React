import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSilice"

const appStore = configureStore({
reducer:{
    cart :cartReducer,
},
});

export default appStore;