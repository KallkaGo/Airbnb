import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {TabsWrapper} from "@/components/section-tabs/style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
    const {tabNames = [], tabChange} = props
    const [currenrIndex, setcurrenrIndex] = useState(0)
    const handleCLick = (item, index) => {

        setcurrenrIndex(index)
        tabChange(item, index)
    }
    return (
        <TabsWrapper>
            <ScrollView>
                {tabNames.map((item, index) => {
                    return (
                        <div
                            className={classNames('item', {active: index === currenrIndex})}
                            key={item}
                            onClick={() => handleCLick(item, index)}>
                            {item}
                        </div>
                    )
                })}
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
};

export default SectionTabs;