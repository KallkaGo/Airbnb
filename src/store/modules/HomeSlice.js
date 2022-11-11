import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
    getHomeDiscount,
    getHomeGoodPriceData,
    getHomeHighScore,
    getHomelongfor, getHomePlus,
    gethomerecommenddest
} from "@/services/modules/home";

export const fetchHomeData = createAsyncThunk("fetchdata", (payload, {dispatch}) => {
    getHomeGoodPriceData().then((res) => {
        dispatch(changeGoodPrice(res))
    })
    getHomeHighScore().then((res) => {
        dispatch(changeHighScore(res))
    })
    getHomeDiscount().then((res) => {
        dispatch(changeDiscount(res))
    })
    gethomerecommenddest().then((res) => {
        dispatch(changeRecommend(res))
    })
    getHomelongfor().then((res)=>{
        dispatch(changeLongfor(res))
    })
    getHomePlus().then((res)=>{
        dispatch(changeHomePlus(res))
    })

})

const HomeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        DiscountInfo: {},
        RecommendInfo: {},
        Longfor:{},
        Plus:{

        }
    },
    reducers: {
        changeGoodPrice(state, {payload}) {
            state.goodPriceInfo = payload
        },
        changeHighScore(state, {payload}) {
            state.highScoreInfo = payload
        },
        changeDiscount(state, {payload}) {
            state.DiscountInfo = payload
        },
        changeRecommend(state, {payload}) {
            state.RecommendInfo = payload
        },
        changeLongfor(state,{payload}){
            state.Longfor = payload
        },
        changeHomePlus(state,{payload}){
            state.Plus = payload
        },
    },
    extraReducers: {
        // [fetchHomeData.fulfilled](state,{payload}){
        //      state.goodPriceInfo = payload
        // }
    }
})
export const {changeGoodPrice, changeHighScore, changeDiscount, changeRecommend,changeLongfor,changeHomePlus} = HomeSlice.actions
export const {reducer: Homereducer} = HomeSlice