import React, {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {IndicatorWrapper} from "@/base-ui/indicator/style";

const Indicator = memo((props) => {
    const {selectIndex = 0} = props
    const contentRef = useRef()
    useEffect(() => {
        //item的数据
        const selectItemEl = contentRef.current.children[selectIndex]
        const offsetLeft = selectItemEl.offsetLeft
        const width = selectItemEl.clientWidth
        //content的数据
        const ContainerWidth = contentRef.current.clientWidth
        let totaldistance = contentRef.current.scrollWidth - ContainerWidth
        //获取滚动的距离
        let distance = (offsetLeft + width * 0.5) - (ContainerWidth * 0.5)
        /*特殊情况处理*/
        if (distance < 0) distance = 0 //判断左边的特殊情况处理
        if (distance > totaldistance) distance = totaldistance // 右边的特殊情况处理
        /*改变位置*/
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])
    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {props.children}
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
};

export default Indicator;