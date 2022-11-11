import React, {memo, useState} from 'react';
import {HeaderWrapper} from "@/components/app-header/style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left";
import HeaderCenter from "@/components/app-header/c-cpns/header-center";
import HeaderRight from "@/components/app-header/c-cpns/header-right";

const Header = memo(() => {

    return (
        <HeaderWrapper>
            <HeaderLeft/>
            <HeaderCenter/>
            <HeaderRight/>
        </HeaderWrapper>
    );
})

export default Header;