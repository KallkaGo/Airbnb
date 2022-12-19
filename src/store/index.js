import {configureStore} from "@reduxjs/toolkit";
import {Homereducer} from "@/store/modules/HomeSlice";
import {DetailReducer} from "@/store/modules/detailSlice";
import {mainReducer} from "@/store/modules/mainSlice";
import EntireReducer from './entire'
const store = configureStore({
    reducer:{
        home:Homereducer,
        entire:EntireReducer,
        detail:DetailReducer,
        main:mainReducer
    }
})

export default store