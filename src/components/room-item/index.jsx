import React, {memo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {RoomItemWarpp} from "@/components/room-item/style";
import {Carousel} from 'antd';
import Rating from '@mui/material/Rating';
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo(({itemData, width = "25%",itemCLick}) => {
    const [selectIndex, setSelectIndex] = useState(0)
    const SwiperRef = useRef()
    const handleLeftClick = () => {
        let newIndex = selectIndex - 1
        if (newIndex < 0) newIndex = itemData?.picture_urls.length - 1
        setSelectIndex(newIndex)
        SwiperRef.current.prev()
    }
    const handleRightClick = () => {
        let newIndex = selectIndex + 1
        if (newIndex > itemData?.picture_urls.length - 1) newIndex = 0
        setSelectIndex(newIndex)
        SwiperRef.current.next()

    }
    const handleDetail =()=>{
    if(itemCLick) itemCLick(itemData)
    }
    return (
        <RoomItemWarpp color={itemData?.verify_info?.text_color || "#39576a"} width={width}  >
            <div className="inner">

                {itemData.picture_urls ? (<div className="swiper">
                    <div className="control">
                        <div className="btn left" onClick={handleLeftClick}>
                            <IconArrowLeft width="30" height="30"/>
                        </div>
                        <div className="btn right" onClick={handleRightClick}>
                            <IconArrowRight width="30" height="30"/>
                        </div>
                    </div>
                    <div className="indicator">
                        <Indicator selectIndex={selectIndex}>
                            {itemData?.picture_urls?.map((item, index) => {
                                return (
                                    <div className="dot-item"
                                         key={index}>
                                        <span className={classNames('dot', {active: selectIndex === index})}></span>
                                    </div>
                                )
                            })}
                        </Indicator>
                    </div>
                    <div className="carousel"onClick={handleDetail} >
                        <Carousel dots={false} ref={SwiperRef} >
                            {
                                itemData?.picture_urls?.map((item) => {
                                    return (
                                        <div className="cover" key={item} >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>

                </div>) : <div className="cover">
                    <img src={itemData.picture_url} alt=""/>
                </div>}

                <div className="desc">
                    {
                        itemData.verify_info.messages.join("-")
                    }
                </div>
                <div className="name">{itemData.name}</div>
                <div className="price">
                    {itemData.price_format}/晚
                </div>
                <div className="bottom">
                    <Rating name="size-small" value={itemData.star_rating ?? 5} precision={0.1} readOnly
                            sx={{fontSize: '12px', color: "#00848a"}}/>
                    <span className="count">{itemData.reviews_count}</span>
                    <span className="extrainfo">{itemData.bottom_info?.content}</span>
                </div>

            </div>

        </RoomItemWarpp>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    width: PropTypes.string
};

export default RoomItem;