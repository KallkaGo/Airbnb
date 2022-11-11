import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionList from "@/components/section-list";
import {HomesectionWrapper} from "@/views/home/c-cpns/home-tabsection/style";
import SectionFooter from "@/components/section-footer";

const Hometabsection = memo(({infoData}) => {
    const [name, setName] = useState(Object.keys(infoData.dest_list)[0])
    /*数据处理*/
    const tabsName = infoData.dest_address?.map((item) => item.name)

    const handleTabChange = useCallback((item, index) => {
        console.log(item, index)
        setName(item)
    }, [])
    console.log(infoData)
    return (
        <HomesectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionTabs tabNames={tabsName} tabChange={handleTabChange}></SectionTabs>
            <SectionList ListData={infoData.dest_list?.[name]} itemWidth="33.33%"></SectionList>
            <SectionFooter name={name}/>
        </HomesectionWrapper>
    )
})

Hometabsection.propTypes = {
    infoData: PropTypes.object,
};

export default Hometabsection;