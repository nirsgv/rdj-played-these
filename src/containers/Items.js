import React, { Component } from 'react';
import Item from '../components/Item';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { Ul } from '../components/HtmlGroup';
import { expand_track } from '../reducers/tracks';
const Items = ({children, className='', id='', tracks=[], filters=[], expand_track}) => {
    console.log(tracks.tracksData);
    function hasIntersection(value) {
        const itemGenres = value.genres;
        const chosens = filters.filter_group[0].tags_filter.items.filter((item)=>{return item.chosen});
        const chosenFilterGenres = chosens.map((item)=>{return item.name});
        const intersection = itemGenres && itemGenres.filter(val => -1 !==  chosenFilterGenres.indexOf(val));
        return intersection.length > 0 ? value : '';
    }
    return(
        <div className="items-holder">
            <Ul className="items">
                {
                Array.isArray(tracks.tracksData)
                    ? tracks.tracksData
                        .filter(hasIntersection,tracks.tracksData.genres)
                        .map((item, index, arr) => {
                        return (<Item key={index} item={item} expand_track={expand_track}>123</Item>)
                    })
                    : ''
                }
            </Ul>
        </div>
    )
};

const mapStateToProps = state => ({
    tracks: state.tracks,
    filters: state.filters
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //changePage: () => push('/about-us'),
    expand_track
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);

