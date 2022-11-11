import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {PaginationWrapper} from "@/views/entire/c-cpns/entire-pagination/style";
import Pagination from '@mui/material/Pagination';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeCurrentPageAction, fetchRoomListAction} from "@/store/entire/creacteAction";

const EntirePagination = memo((props) => {
    const dispatch = useDispatch()
    const {totalCount, currentPage, roomList} = useSelector((state) => ({
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        roomList: state.entire.roomList
    }), shallowEqual)
    const Pagelength = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    const handlePaginationChange = (event, value) => {
        //回到顶部
        window.scrollTo(0,0)
        //更新页码
        dispatch(fetchRoomListAction(value - 1))
    }
    return (
        <PaginationWrapper>
            {!!roomList.length && (
                <div className="info">
                    <Pagination count={Pagelength} onChange={handlePaginationChange}/>
                    <div className="desc">
                        第{startCount} - {endCount}个房源，共超过{totalCount}个
                    </div>
                </div>
            )}

        </PaginationWrapper>
    )
})

EntirePagination.propTypes = {};

export default EntirePagination;