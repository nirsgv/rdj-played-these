import React, { Component } from 'react';
import Item from '../components/Item';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { Ul } from '../components/htmlGroup';
import { expand_track } from '../reducers/tracks';
const Items = ({children, className='', id='', tracks=[], filters=[], expand_track}) => {
        const searchActiveString = filters.searchActiveString;

    const tagsIntersection = (value) => {
        const itemGenres = value.genres;
        const chosens = filters.filter_group[0].tags_filter.items.filter((item)=>{return item.chosen});
        const chosenFilterGenres = chosens.map((item)=>{return item.name});
        return !(chosens.length===0) ? hasIntersection(itemGenres,chosenFilterGenres,value) : value;
    };

    const hasIntersection = (a,b,value) => {
        const intersection = a && a.filter(val => -1 !==  b.indexOf(val));
        return intersection.length > 0 ? value : '';
    };
    function startsWithdecadeIntersection(filters) {
        return (value,index,array) => {
            const year = value.release_year;
            const chosens = filters.filter_group[1].decade_filter.items.filter((item)=>{return item.chosen});
            const chosenFilterDecades = chosens.map((item)=>{return item.name});
            const intersection = chosenFilterDecades.filter(val => checkYearAgainstTags(val,year));
            console.log('chosens ',chosens);
            console.log('intersection ',intersection);

            return chosens.length === 0  //check for no chosen switches in array, if so return all values, otherwise check value for intersection with 'year'
                ? value
                :  intersection.length !== 0 //check for intersection in array
                    ? value
                    : '';        }
    }


    const checkYearAgainstTags = (decade,year) => {
        const yearNum = Number(year);
        let boolean = false;
        switch(decade) {
            case "75-80": if (yearNum>1975 && yearNum<1980) {boolean = true} break;
            case "80-85": if (yearNum>1980 && yearNum<1985) {boolean = true} break;
            case "85-90": if (yearNum>1985 && yearNum<1990) {boolean = true} break;
            case "90-95": if (yearNum>1990 && yearNum<1995) {boolean = true} break;
            case "95-00": if (yearNum>1995 && yearNum<2000) {boolean = true} break;
            case "00-05": if (yearNum>2000 && yearNum<2005) {boolean = true} break;
            case "05-10": if (yearNum>2005 && yearNum<2010) {boolean = true} break;
            case "10-15": if (yearNum>2010 && yearNum<2015) {boolean = true} break;
            case "15-20": if (yearNum>2015 && yearNum<2020) {boolean = true} break;
            default:
                return false
        }
        return boolean;
    };

    function startsWithstringIntersection(searchActiveString) {
        return (item,index,array) => {
            const {track_title,artist_name,record_label} = item;
            const searchString = searchActiveString.toLowerCase();
            const trackTitle = track_title ? track_title.toLowerCase() : '';
            const atristName = artist_name ? artist_name.toLowerCase() : '';
            const recordLabel = record_label ? record_label.toLowerCase() : '';
            return trackTitle.indexOf(searchString) != -1 || atristName.indexOf(searchString) != -1 || recordLabel.indexOf(searchString) != -1;
        }
    }

    return(
        <div className="items-holder">
            {searchActiveString}
            <Ul className="items">
                {
                Array.isArray(tracks.tracksData)
                    ? tracks.tracksData
                        .filter(tagsIntersection)
                        .filter(startsWithdecadeIntersection(filters))
                        .filter(startsWithstringIntersection(searchActiveString))
                        .map((item, index) => {
                        return (
                            <Item key={index} item={item} expand_track={expand_track}>123</Item>
                        )
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

