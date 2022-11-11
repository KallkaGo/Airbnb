import React, {memo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {PictureWrapper} from "@/views/detail/c-cpns/detail-pictures/style";
import {shallowEqual, useSelector} from "react-redux";

const Pictures = memo((props)=>{
    const [Info,setInfo] = useState(JSON.parse(window.sessionStorage.getItem('itemInfo')))
    return(
        <PictureWrapper>
          <div className="picture">
              <div className="left">
                  <div className="item">
                      <img src={Info?.picture_urls[0]} alt=""/>
                      <div className="cover"></div>
                  </div>
              </div>
              <div className="right">
                  {
                      Info?.picture_urls?.slice(1,5).map((item)=>{
                          return(
                              <div className="item " key={item}>
                                  <img src={item} alt=""/>
                                  <div className="cover"></div>
                              </div>
                          )
                      })
                  }
              </div>
          </div>
        </PictureWrapper>
    )
})

Pictures.propTypes = {
    
};

export default Pictures;