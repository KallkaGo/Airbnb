import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {PictureWrapper} from "@/views/detail/c-cpns/detail-pictures/style";

import PictureBrowser from "@/base-ui/picture-browser";

const Pictures = memo((props) => {
    /*定义组件内部状态*/
    const [Info, setInfo] = useState(JSON.parse(window.sessionStorage.getItem('itemInfo')))
    const [showBrowser, setShowBrowser] = useState(false)
    return (
        <PictureWrapper>
            <div className="picture">
                <div className="left">
                    <div className="item" onClick={e => setShowBrowser(true)}>
                        <img src={Info?.picture_urls[0]} alt=""/>
                        <div className="cover"></div>
                    </div>
                </div>
                <div className="right">
                    {
                        Info?.picture_urls?.slice(1, 5).map((item) => {
                            return (
                                <div className="item " key={item}>
                                    <img src={item} alt=""/>
                                    <div className="cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="show-browser" onClick={() => setShowBrowser(true)}>显示照片</div>
            {showBrowser &&
                <PictureBrowser
                    pictureUrls={Info.picture_urls}
                    closeCLick={e => setShowBrowser(false)}
                />}
        </PictureWrapper>
    )
})

Pictures.propTypes = {};

export default Pictures;