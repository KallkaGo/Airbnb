import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {SectionFooterWrapper} from "@/components/section-footer/style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import {useNavigate} from "react-router-dom";

const SectionFooter = memo((props) => {
    const {name} = props
    let showmore = "显示更多房源"
    if (name) {
        showmore = `查看更多${name}房源`
    }
    /*事件处理的逻辑 跳转页面*/
    const navigate = useNavigate()
    const handleCLick =()=>{
        navigate("/entire")
    }

    return (
        <SectionFooterWrapper color={name ? "#00848A" : "#000"}  >
            <div className="info" onClick={handleCLick}>
                <span className="text">{showmore}</span>
                <IconMoreArrow/>
            </div>
        </SectionFooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
};

export default SectionFooter;