import React, {memo} from 'react';
import {LeftWrapper} from "@/components/app-header/c-cpns/header-left/style";
import IconLogo from "@/assets/svg/icon_logo";
import {useNavigate} from "react-router-dom";

const HeaderLeft = memo(() => {
    const navigate =useNavigate()
    const handleLogoClick =()=>{
        navigate('/home')
    }
    return (
        <LeftWrapper>
            <div className="logo" onClick={handleLogoClick}>
                <IconLogo/>
            </div>

        </LeftWrapper>
    );
})

export default HeaderLeft;