import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { Ul, Li, Hnum } from '../../components/HtmlGroup';
import { expand_filter, toggle_chosen_detail, activate_filter } from "../../reducers/filters";
import FilterMaster from "./filterMaster";
import FilterDetail from "./filterDetail";
const Filters = ({children, className='', id='', filters, expand_filter, toggle_chosen_detail}) => {
    const {filter_group} = filters;
    console.log(filter_group);

    return(
    <div className="filters">
        <div className="filters-master-holder">
            <FilterMaster filter_group={filter_group} expand_filter={expand_filter}/>
            <FilterDetail filter_group={filter_group} toggle_chosen_detail={toggle_chosen_detail} activate_filter={activate_filter}/>
        </div>
    </div>
    )
};

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => bindActionCreators({
    expand_filter,
    toggle_chosen_detail,
    activate_filter
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters);

