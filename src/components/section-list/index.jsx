import React, {memo} from 'react';
import PropTypes from 'prop-types';
import RoomItem from "@/components/room-item";
import {RoomWrapper} from "@/components/section-list/style";

const SectionList = memo(({ListData,itemWidth}) => {
    return (
       <RoomWrapper>
           {
               ListData?.slice(0, 8).map((item) => {
                   return (
                       <RoomItem key={item.id} itemData={item} width={itemWidth}></RoomItem>
                   )
               })
           }
       </RoomWrapper>
    )
})

SectionList.propTypes = {
    ListData: PropTypes.array,
    itemWidth:PropTypes.string
};

export default SectionList;