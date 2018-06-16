import React from 'react'
import { Ul, Li, Hnum } from '../../components/htmlGroup';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {set_search_string} from "../../reducers/filters";
const Search = ({children, className='', id='', onClick=null, filter_group=null, expand_filter, filters, set_search_string}) => {
const { searchActiveString } = filters;
   return (
            <nav className={"filter-detail"}>
                <input type="text" name="title" defaultValue={searchActiveString} value={searchActiveString} onChange={(event) => set_search_string(event.target.value)}/>
            </nav>
    )
};

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchToProps = dispatch => bindActionCreators({
    set_search_string,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
