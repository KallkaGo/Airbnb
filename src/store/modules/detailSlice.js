import {createSlice} from "@reduxjs/toolkit";

const DetailSlice = createSlice({
    name: "detail",
    initialState: {
        detailInfo: {}
    },
    reducers: {
        changeDetailInfoAction(state, {payload}) {
            state.detailInfo = payload
        }
    }
})

export const {changeDetailInfoAction} = DetailSlice.actions
export const {reducer: DetailReducer} = DetailSlice