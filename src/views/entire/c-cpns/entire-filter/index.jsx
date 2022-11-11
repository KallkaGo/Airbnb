import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {FilterWrapper} from "@/views/entire/c-cpns/entire-filter/style";
import FilterData from '@/assets/data/filter_data.json'
import classNames from "classnames";

const EntireFilter = memo((props) => {
    const [selecitem, setSelecitem] = useState([])
    const handleFilterCLick = (item) => {
        const newItem = [...selecitem]
        if (newItem.includes(item)) {
            const index = newItem.findIndex((key) => key === item)
            newItem.splice(index, 1)
        } else {
            newItem.push(item)
        }
        setSelecitem(newItem)
    }
    return (
        <FilterWrapper>
            <div className="filter">
                {FilterData.map((item) => {
                    return (
                        <div className={classNames("item", {active: selecitem.includes(item)})}
                             key={item}
                             onClick={() => handleFilterCLick(item)}>{item}</div>
                    )
                })}
            </div>
        </FilterWrapper>
    )
})

EntireFilter.propTypes = {};

export default EntireFilter;