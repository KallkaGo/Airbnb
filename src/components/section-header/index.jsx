import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper} from "@/components/section-header/style";

const SectionHeader = memo((props) => {
    const {title, subtitle = "默认子标题数据"} = props
    return (
        <HeaderWrapper>
            <h2 className="title">{title}</h2>
            {subtitle && (<h5 className="subtitle">{subtitle}</h5>)}
        </HeaderWrapper>
    )
})

SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default SectionHeader;