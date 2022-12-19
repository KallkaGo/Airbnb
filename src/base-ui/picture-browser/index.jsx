import React, {memo, useEffect, useState} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group'
import PropTypes from 'prop-types';
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconTriangleBottom from "@/assets/svg/icon-triangle-bottom";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
import IconTriangleTop from "@/assets/svg/icon-triangle-top";

const PictureBrowser = memo((props) => {
    const {pictureUrls, closeCLick} = props
    const [currentIndex, setcurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(true)
    const [showList, setShowList] = useState(true)
    /*当图片浏览器展示出来时，滚动的功能消失*/
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    /*事件监听的逻辑*/
    const handleCLick = () => {
        if (closeCLick) closeCLick()
    }

    const controlHandle = (isNext = true) => {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        /*判断是否越界*/
        if (newIndex < 0) newIndex = pictureUrls.length - 1;
        if (newIndex > pictureUrls.length - 1) newIndex = 0
        setcurrentIndex(newIndex)
        setIsNext(isNext)

    }

    const handleBottomCLick = (index) => {
        setIsNext(index > currentIndex)
        setcurrentIndex(index)
    }

    return (
        <BrowserWrapper isNext={isNext} showList={showList}>
            <div className="top">
                <div className="close-btn" onClick={handleCLick}>
                    <IconClose/>
                </div>
            </div>
            <div className="slider">
                <div className='control'>
                    <div className='btn left' onClick={e => controlHandle(false)}>
                        <IconArrowLeft width='77' height="77"/>
                    </div>
                    <div className='btn right' onClick={e => controlHandle(true)}>
                        <IconArrowRight width='77' height="77"/>
                    </div>
                </div>
                <div className='pictures'>
                    <SwitchTransition mode='in-out'>
                        <CSSTransition key={pictureUrls[currentIndex]} classNames='pic' timeout={200}>
                            <img src={pictureUrls[currentIndex]} alt=""/>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className='info'>
                    <div className='desc'>
                        <div className='count'>
                            <span>{currentIndex + 1}/{pictureUrls.length}:</span>
                            <span>room apartment图片{currentIndex + 1}</span>
                        </div>
                        <div className='toggle' onClick={e => setShowList(!showList)}>
                            <span>{showList ? "隐藏" : "显示"}照片列表</span>
                            {showList ? <IconTriangleBottom/> : <IconTriangleTop/>}
                        </div>
                    </div>
                    <div className='list'>
                        <Indicator selectIndex={currentIndex}>
                            {pictureUrls.map((item, index) => {
                                return (
                                    <div
                                        className={classNames('item', {active: currentIndex === index})}
                                        key={item}
                                        onClick={(e) => handleBottomCLick(index)}
                                    >
                                        <img src={item} alt=""/>
                                    </div>
                                )
                            })}
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
};

export default PictureBrowser;