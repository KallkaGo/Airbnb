import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {HomeSectionWrapper} from "@/views/home/c-cpns/home-section/style";
import SectionHeader from "@/components/section-header";
import SectionList from "@/components/section-list";
import SectionFooter from "@/components/section-footer";

const HomeSection = memo((props) => {
    const {infoData} = props
    return (
        <HomeSectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionList ListData={infoData.list}/>
            <SectionFooter/>
        </HomeSectionWrapper>
    )

})

HomeSection.propTypes = {
    infoData: PropTypes.object
};

export default HomeSection;