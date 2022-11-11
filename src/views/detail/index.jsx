import React, {memo} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import Pictures from "@/views/detail/c-cpns/detail-pictures";
import DetailInfo from "@/views/detail/c-cpns/detail-infos";


const detail = memo(() => {
    return (
      <DetailWrapper>
          <Pictures/>
          <DetailInfo/>
      </DetailWrapper>
    );
})

export default detail;