import React, { Component } from 'react';
import Item from '../components/Item';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { Ul } from '../components/HtmlGroup';
import { expand_track } from '../reducers/tracks';
const Items = ({children, className='', id='', tracks=[], filters=[], expand_track}) => {
    //console.log(filters.filter_group[2].search.searchActiveString);
    //const { searchActiveString } = filters.filter_group[2].search;
    //console.log(filters.filter_group[2].searchActiveString);
        const searchActiveString = filters.searchActiveString;
        console.log(searchActiveString);
    const inov = filters.searchActiveString;
    const stringIntersection = (value) => {


        //let pos = ttt.indexOf(searchActiveString); // 2
        console.log(value);
        console.log(value.track_title.toLowerCase());
        console.log(value.album_title.toLowerCase());
        console.log(value.artist_name.toLowerCase());
        console.log(value.record_label.toLowerCase());
        //console.log(pos);


        let str = "Hello world, welcome to the universe.";
        //let n = value.track_title.indexOf(searchActiveString);

        return (value);
    };
    const tagsIntersection = (value) => {
        const itemGenres = value.genres;
        const chosens = filters.filter_group[0].tags_filter.items.filter((item)=>{return item.chosen});
        const chosenFilterGenres = chosens.map((item)=>{return item.name});
        return hasIntersection(itemGenres,chosenFilterGenres,value);
    };
    const hasIntersection = (a,b,value) => {
        const intersection = a && a.filter(val => -1 !==  b.indexOf(val));
        return intersection.length > 0 ? value : '';
    };
    const niceFilter = (value) => {
        return value;
    };

    const decadeIntersection = (value) => {
        const year = value.release_year;
        const chosens = filters.filter_group[1].decade_filter.items.filter((item)=>{return item.chosen});
        const chosenFilterDecades = chosens.map((item)=>{return item.name});
        const intersection = chosenFilterDecades.filter(val => checkYearAgainstTags(val,year));
        return intersection.length > 0 ? value : '';
    };
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
    return(
        <div className="items-holder">
            <Ul className="items">
                {
                Array.isArray(tracks.tracksData)
                    ? tracks.tracksData
                        .filter(tagsIntersection)
                        .filter(decadeIntersection)
                        .filter(stringIntersection)
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

