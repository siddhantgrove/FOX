import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Components/Contact/AuthSlice.js"

const store = configureStore({
    reducer : {
        auth : authReducer,
        
    }
})
export default store