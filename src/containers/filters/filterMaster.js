import React from 'react'
import { Ul, Li, Hnum } from '../../components/HtmlGroup';

const FilterMaster = ({children, className='', id='', onClick=null, filter_group, expand_filter}) => (
    <nav className={"filter-master"}>
        <Ul className={`filters master ${className}`}  id="filter-by-list">
            {
                Array.isArray(filter_group) &&
                filter_group.map((item, index, arr) => {
                        const tmpKey =  Object.keys(item)[0];
                        const items =  item[tmpKey].items;
                        console.log(item[tmpKey].expanded);
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
    </nav>
);

export default FilterMaster;