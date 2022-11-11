import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {LongforWarpper} from "@/views/home/c-cpns/home-longfor/style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
    const {infoData} = props
    return (
        <LongforWarpper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <div className="contentList">
              <ScrollView>
                  {infoData.list.map((item) => {
                      return <LongforItem itemData={item} key={item.city}/>
                  })}
              </ScrollView>
            </div>

        </LongforWarpper>
    )
})

HomeLongfor.propTypes = {
    infoData: PropTypes.object
};

export default HomeLongfor;