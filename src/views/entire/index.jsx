import React, {memo, useEffect} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import EntireRoom from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";
import {useDispatch} from "react-redux";
import {fetchRoomListAction} from "@/store/entire/creacteAction";

const Entire = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRoomListAction())
    }, [dispatch])
    return (
        <EntireWrapper>
            <EntireFilter/>
            <EntireRoom/>
            <EntirePagination/>
        </EntireWrapper>
    );
})

export default Entire;