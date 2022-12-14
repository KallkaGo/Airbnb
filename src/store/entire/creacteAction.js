import * as actionTypes from './constants'
import {getEntireRoomList} from "@/services/modules/entire";

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})
export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changetotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})
export const changeIsOpenAction = (isOpen) => ({
    type: actionTypes.CHANGE_ISOPEN,
    isOpen
})
export const fetchRoomListAction = (page = 0) => {
    //新的函数
    return async (dispatch, getState) => {
        //0.修改currentpage
        dispatch(changeCurrentPageAction(page))
        //根据页码获取最新的数据
        // const currentPage =getState().entire.currentPage
        dispatch(changeIsOpenAction(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeIsOpenAction(false))
        //保存到store里
        const RoomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(RoomList))
        dispatch(changetotalCountAction(totalCount))
    }
}