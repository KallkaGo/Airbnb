import {configureStore} from "@reduxjs/toolkit";
import {Homereducer} from "@/store/modules/HomeSlice";
import {DetailReducer} from "@/store/modules/detailSlice";
import EntireReducer from './entire'
const store = configureStore({
    reducer:{
        home:Homereducer,
        entire:EntireReducer,
        detail:DetailReducer
    }
})

export default store