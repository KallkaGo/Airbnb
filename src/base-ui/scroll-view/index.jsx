import React, {memo, useEffect, useRef, useState} from 'react';
// import PropTypes from 'prop-types';
import {ScrollViewWarpper} from "@/base-ui/scroll-view/style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
    const [showLeftBtn, setShowleft] = useState(false)
    const [showRightBtn, setShowright] = useState(false)
    const [posIndex, setposIndex] = useState(0)
    /*若设置为组件的状态，则每次set改变状态时组件都会重新渲染,但是本身这个值只是作为一个记录 不需要让页面重新渲染 有不必要的性能开销*/
    // const [scrolldistance, settotaldistance] = useState(0)
    const scrollContentRef = useRef()
    const scrolldistance = useRef()
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth  //本身占据的宽度
        const totaldistance = scrollWidth - clientWidth

        setShowright(totaldistance > 0)

        scrolldistance.current = totaldistance
    }, [])

    const handleClick = (type) => {

        const newIndex = type === 'left' ? posIndex - 1 : posIndex + 1
        const newEl = scrollContentRef.current.children[newIndex]
        const offsetLeft = newEl.offsetLeft
        scrollContentRef.current.style.transform = `translateX(-${offsetLeft}px)`
        setposIndex(newIndex)
        /*是否继续显示按钮*/
        setShowleft(offsetLeft > 0)

        setShowright(scrolldistance.current > offsetLeft)

    }

    return (
        <ScrollViewWarpper>
            {showLeftBtn && (
                <div className="control left" onClick={() => handleClick('left')}><IconArrowLeft/></div>
            )}
            {showRightBtn && (
                <div className="control right" onClick={() => handleClick('right')}>
                    <IconArrowRight/>
                </div>
            )}
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>

        </ScrollViewWarpper>
    )
})

ScrollView.propTypes = {};

export default ScrollView;