import React from 'react'
import { Ul, Li, Hnum } from '../../components/HtmlGroup';
const FilterDetail = ({children, className='', id='', onClick=null, filter_group=null, expand_filter, toggle_chosen_detail, activate_filter}) => {
    const filtered_filter_group = filter_group ? filter_group.filter(word => {
        const tmpKey = Object.keys(word)[0];
        return word[tmpKey].expanded === true;
    }) : [];
    const chosen_filtered_filter_group = filtered_filter_group[0];
    const tmpKey = chosen_filtered_filter_group ? Object.keys(chosen_filtered_filter_group)[0] : null;
            return (
            tmpKey &&
            <nav className={"filter-detail"}>
                <Ul className={`filters detail ${className}`} id="filter-by-list">
                    {chosen_filtered_filter_group[tmpKey].items.map((item, index, arr) => {
                            console.log(item.tagName);
                            const itemIndex = Number(index);
                            const chosenClassName = item.chosen ? 'chosen' : 'unchosen';
                            return (
                                <Li key={index} className={`filter-by item ${item.name} ${chosenClassName}`}
                                onClick={() => toggle_chosen_detail(itemIndex,filter_group)}
                                >
                                    {item.name}
                                </Li>
                            )
                        }
                    )
                }
        </Ul>
                <div className="button-strip">
                    <button className="button" onClick={() => activate_filter(2,filter_group,tmpKey)}></button>
                </div>
    </nav>
    )
};

export default FilterDetail;