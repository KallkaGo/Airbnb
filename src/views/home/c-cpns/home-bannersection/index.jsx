import React, {memo} from 'react';
import PropTypes from 'prop-types';

import SectionHeader from "@/components/section-header";
import {SectionBannerWrapper} from "@/views/home/c-cpns/home-bannersection/style";
import SectionList from "@/components/section-list";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";


const BannerSection = memo((props) => {
    const {infoData} = props
    return (
        <SectionBannerWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <div className="room-list">
                <ScrollView>
                    {infoData.list.map((item) => {
                        return (<RoomItem itemData={item} key={item.id} width="20%"/>)
                    })}
                </ScrollView>

            </div>
        </SectionBannerWrapper>


    )
})

BannerSection.propTypes = {
    InfoData: PropTypes.object
};

export default BannerSection;