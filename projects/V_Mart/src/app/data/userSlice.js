import { createSlice } from "@reduxjs/toolkit"
import { Products} from "../data";

const initialState = {
    Products,
    addtoCart:[]
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        }
        
})
