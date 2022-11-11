import React, {memo, useEffect, useState} from 'react';
import {RightWrapper} from "@/components/app-header/c-cpns/header-right/style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconUser from "@/assets/svg/icon_user";

const HeaderRight = memo(() => {
    const [show, setShow] = useState(false)
    /*副作用代码*/
    useEffect(()=>{

        window.addEventListener('click',()=>{

            setShow(false)
        },true)
        return()=>{

            window.removeEventListener('click',()=>{setShow(false)},true)
        }
    },[])
    /*事件处理函数*/
    const handleClick =()=>{
        setShow(true)
    }
    return (
        <RightWrapper>
            <div className='btns'>
                <span className="btn">登录</span>
                <span className="btn">注册</span>
                <span className="btn">
                <IconGlobal/>
            </span>
            </div>
            <div className='profile' onClick={handleClick}>
                <IconMenu/>
                <IconUser/>
                {show && (<div className="panel">
                    <div className="top">
                        <div className="register">注册</div>
                        <div className="login">登录</div>
                    </div>
                    <div className="bottom">
                        <div className="register">出租房源</div>
                        <div className="login">开展体验</div>
                        <div className="login">帮助</div>
                    </div>
                </div>)}
            </div>
        </RightWrapper>
    );
})

export default HeaderRight;