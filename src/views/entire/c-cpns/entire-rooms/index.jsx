import React, {memo, useCallback} from 'react';
// import PropTypes from 'prop-types';
import {RoomWrapper} from "@/views/entire/c-cpns/entire-rooms/style";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import RoomItem from "@/components/room-item";
import {useNavigate} from "react-router-dom";
import {changeDetailInfoAction} from "@/store/modules/detailSlice";

const EntireRoom = memo((props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {RoomList, totalCount, isOpen} = useSelector((state) => ({
        RoomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isOpen: state.entire.isOpen
    }), shallowEqual)
    const itemCLickHandle = useCallback((item) => {
        dispatch(changeDetailInfoAction(item))
        window.sessionStorage.setItem('itemInfo',JSON.stringify(item))
        navigate('/detail')
    }, [navigate,dispatch])
    return (
        <RoomWrapper>
            <div className="title">
                <h2>共{totalCount}处住所</h2>
            </div>

            <div className="list">
                {RoomList.map((item) => {
                    return (
                        <RoomItem
                            itemData={item}
                            width="20%"
                            key={item._id}
                            itemCLick={itemCLickHandle}
                        ></RoomItem>
                    )
                })}
            </div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isOpen}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </RoomWrapper>
    )
})

EntireRoom.propTypes = {};

export default EntireRoom;