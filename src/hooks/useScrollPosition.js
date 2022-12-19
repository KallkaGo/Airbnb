import {useEffect, useState} from "react";
import { throttle} from 'underscore'

export default function useScrollPosition() {
    /*状态*/
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    /*监听window滚动*/
    useEffect(() => {
        /*频繁触发 组件重新渲染 所以需要节流*/
        const handleScroll=throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        },100)

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    /*返回*/
    return {scrollX,scrollY}
}