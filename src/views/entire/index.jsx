import React, {memo, useEffect} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import EntireRoom from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";
import {useDispatch} from "react-redux";
import {fetchRoomListAction} from "@/store/entire/creacteAction";
import AppHeader from "@/components/app-header";
import {changeHeaderConfig} from "@/store/modules/mainSlice";

const Entire = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRoomListAction())
        dispatch(changeHeaderConfig({isFixed: true,topAlpha: false}))
    }, [dispatch])
    return (
        <EntireWrapper>
            {/*<AppHeader/>*/}
            <EntireFilter/>
            <EntireRoom/>
            <EntirePagination/>
        </EntireWrapper>
    );
})

export default Entire;