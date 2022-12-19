import React, {memo, useState} from 'react';
import {CSSTransition} from 'react-transition-group'
import {CenterWrapper} from "@/components/app-header/c-cpns/header-center/style";
import IconSearch from "@/assets/svg/icon_search";
import SearchTabs from "@/components/app-header/c-cpns/header-center/c-cpns/search-tabs";
import SearchTitles from '@/assets/data/search_titles.json'
import SearchSections from "@/components/app-header/c-cpns/header-center/c-cpns/search-sections";

const HeaderCenter = memo((props) => {
    const {isSearch, searchBarCLick} = props

    const [tabIndex, setTabIndex] = useState(0)
    const titles = SearchTitles.map(item => item.title)
    const searchBarClickHandle = () => {

        if (searchBarCLick) searchBarCLick()
    }
    const tabClickHandle=(index)=>{

        setTabIndex(index)
    }
    return (
        <CenterWrapper>
            <CSSTransition in={!isSearch} classNames='bar' timeout={250}  unmountOnExit={true} >
                <div className="search-bar" onClick={searchBarClickHandle}>
                    <div className="text">搜索房源和体验</div>
                    <span className="icon">
                    <IconSearch/>
                </span>
                </div>
            </CSSTransition>
            <CSSTransition in={isSearch}  classNames='detail'  timeout={250} unmountOnExit={true} >
                <div className='search-detail'>
                    <SearchTabs titles={titles} tabClick={tabClickHandle}/>
                    <div className='infos'>
                        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
                    </div>
                </div>
            </CSSTransition>



        </CenterWrapper>);
})

export default HeaderCenter;