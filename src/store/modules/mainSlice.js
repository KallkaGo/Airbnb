import { createSlice} from '@reduxjs/toolkit'

const mainSlice = createSlice({
    name:'main',
    initialState:{
        headerConfig:{
            isFixed:true,
            topAlpha:false
        }
    },
    reducers:{
        changeHeaderConfig(state,{payload}){
        state.headerConfig = payload
        }
    }
})
export const {changeHeaderConfig} = mainSlice.actions

export const {reducer:mainReducer} =mainSlice