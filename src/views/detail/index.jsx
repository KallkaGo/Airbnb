import React, {memo, useEffect} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import Pictures from "@/views/detail/c-cpns/detail-pictures";
import DetailInfo from "@/views/detail/c-cpns/detail-infos";
import {useDispatch} from "react-redux";
import {changeHeaderConfig} from "@/store/modules/mainSlice";


const detail = memo(() => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(changeHeaderConfig({isFixed: false,topAlpha: false}))
        },
        [dispatch])
    return (
      <DetailWrapper>

          <Pictures/>
          <DetailInfo/>
      </DetailWrapper>
    );
})

export default detail;