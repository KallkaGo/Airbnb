import React, {memo, useRef, useState} from 'react';
import {HeaderWrapper, SearchAreaWrapper} from "@/components/app-header/style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left";
import HeaderCenter from "@/components/app-header/c-cpns/header-center";
import HeaderRight from "@/components/app-header/c-cpns/header-right";
import {shallowEqual, useSelector} from "react-redux";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";

const Header = memo(() => {
    /*定义组件内部的状态*/
    const [isSearch, SetIsSearch] = useState(false)

    const {headerConfig} = useSelector((state) => ({
        headerConfig: state.main.headerConfig
    }), shallowEqual)
    const {isFixed, topAlpha} = headerConfig

    /*监听滚动*/
    const {scrollY} = useScrollPosition()
    const prevY = useRef(0)
    //在正常情况下（搜索框没有弹出来），不断记录值
    if (!isSearch) prevY.current = scrollY
    //在弹出搜索功能的情况下,滚动的距离大于之前滚动的距离的30px 将其隐藏
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) SetIsSearch(false)

    /*透明度的逻辑*/
    const isAlpha = topAlpha && scrollY === 0

    return (
        <ThemeProvider theme={{isAlpha}}>
            <HeaderWrapper className={classNames({fixed: isFixed})}>
                <div className='content'>
                    <div className='top'>
                        <HeaderLeft/>
                        <HeaderCenter isSearch={isAlpha || isSearch} searchBarCLick={e => SetIsSearch(true)}/>
                        <HeaderRight/>
                    </div>
                    <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
                </div>
                {isSearch && (<div className='cover' onClick={e => SetIsSearch(false)}></div>)}

            </HeaderWrapper>
        </ThemeProvider>

    );
})

export default Header;