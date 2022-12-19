import React, {memo, useEffect} from 'react';
import {HomeWrapper} from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeData} from "@/store/modules/HomeSlice";
import Hometabsection from "@/views/home/c-cpns/home-tabsection";
import HomeSection from "@/views/home/c-cpns/home-section";
import HomeLongfor from "@/views/home/c-cpns/home-longfor";
import HomeBannersection from "@/views/home/c-cpns/home-bannersection";

import AppHeader from "@/components/app-header";
import {changeHeaderConfig} from "@/store/modules/mainSlice";


const home = memo(() => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeData())
        dispatch(changeHeaderConfig({isFixed: true,topAlpha: true}))
    }, [dispatch])
    /*从redux中获取*/
    const {goodPriceInfo, highScoreInfo, DiscountInfo,RecommendInfo,LongforInfo,PlusInfo} = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        DiscountInfo: state.home.DiscountInfo,
        RecommendInfo:state.home.RecommendInfo,
        LongforInfo:state.home.Longfor,
        PlusInfo:state.home.Plus
    }), shallowEqual)


    return (
        <HomeWrapper>
            {/*<AppHeader/>*/}
            <HomeBanner/>
            <div className="content">
                {Object.keys(DiscountInfo).length && <Hometabsection infoData={DiscountInfo}/>}
                {Object.keys(RecommendInfo).length && <Hometabsection infoData={RecommendInfo}/>}
                <HomeSection infoData={goodPriceInfo}/>
                {Object.keys(LongforInfo).length &&<HomeLongfor infoData={LongforInfo} />}
                <HomeSection infoData={highScoreInfo}/>
                {Object.keys(PlusInfo).length &&<HomeBannersection infoData={PlusInfo} />}
            </div>

        </HomeWrapper>

    );
})

export default home;