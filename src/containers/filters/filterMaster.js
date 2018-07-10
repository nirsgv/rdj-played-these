import React from 'react'
import { Ul, Li, Hnum } from '../../components/htmlGroup';

const FilterMaster = ({children, className='', id='', onClick=null, filter_group, expand_filter , searchFilter}) => (

    <nav className={"filter-master"}>
        <Ul className={`filters master ${className}`}  id="filter-by-list">
            {searchFilter && alert(234)}
            {
                Array.isArray(filter_group) &&
                filter_group.map((item, index, arr) => {
                        const tmpKey =  Object.keys(item)[0];
                        const expandedClassName = item[tmpKey].expanded ? 'expanded' : 'minified';
                        return (
                            <Li className={`filters master ${item[tmpKey].tagName} ${expandedClassName}`}
                                key={index}
                                onClick={() => expand_filter(index,filter_group)}
                            >
                                <Hnum num={3}>
                                    {item[tmpKey].tagName}
                                </Hnum>
                            </Li>
                        )
                    }
                )
            }
        </Ul>
        {children}
    </nav>
);

export default FilterMaster;