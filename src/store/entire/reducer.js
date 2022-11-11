import * as actionTypes from "./constants"
const initiaState = {
    currentPage:0, //页码
    roomList:[],  //房间列表
    totalCount:0,
    isOpen:false


}

function reducer(state = initiaState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}
        case actionTypes.CHANGE_ROOM_LIST:
            return  {...state,roomList: action.roomList}
        case actionTypes.CHANGE_TOTAL_COUNT:
            return {...state,totalCount: action.totalCount}
        case actionTypes.CHANGE_ISOPEN:
            return {...state,isOpen: action.isOpen}
        default:
            return state
    }
}

export default reducer