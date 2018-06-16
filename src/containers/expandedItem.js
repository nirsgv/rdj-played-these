import React, { Component } from 'react';
import Item from '../components/Item';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { getItemById } from '../helper_functions'
import { Img, Hnum, Ahref, Span, Ul, Li } from '../components/htmlGroup';
import { unexpand_track, expand_track } from '../reducers/tracks';

console.log(unexpand_track);

const ExpandedItem = ({children, className='', tracks=[], filters=[], expandedItem={}, unexpand_track}) => {
console.log(unexpand_track);
    const {tracksData,selectedTrackId=null,expanded=false} = tracks;
    const item = getItemById(selectedTrackId, tracksData);
    return(
        <div className={`expanded-item-holder ${expanded ? 'active' : 'unactive'}`}>
            {(!(selectedTrackId===null) && expanded) &&
            <ExpandedInner item={item} unexpand_track={unexpand_track} expand_track={expand_track}></ExpandedInner>
            }
        </div>
    )
};

const ExpandedInner = ({...props}) => {

console.log(props);
    const {
        album_title,
        artist_name,
        artwork,
        id,
        genres,
        links,
        record_label,
        show,
        release_year,
        track_title
    } = props.item;
    const {
        unexpand_track,
    } = props;

    const {
        link_apple_music,
        link_deezer,
        link_spotify,
        link_youtube
    } = props.item.links;


    console.log(props.item);
    console.log(props.item.artist_name);
    const spanOrLink = (link, txtLabel) => {
        return (
            link ? <Ahref className={`${txtLabel}-link ${link ? 'available' : 'unavailable'}`} href={link}>{txtLabel}</Ahref>
                : <Span className={`${txtLabel} ${link ? 'available' : 'unavailable'}`}>{txtLabel}</Span>
        )};

    return(
        <div className="expanded-item-inner-wrp">
            <button onClick={() => unexpand_track()}>Lower</button>
            <div className="thumb-image">
                {artwork.sizes && console.log(artwork.sizes)}
                <Img src={artwork.sizes ? artwork.sizes.large : ''}
                     alt={artwork.alt}
                     className={artwork.sizes && artwork.sizes['large-height']>artwork.sizes['large-width']
                         ? 'originally-tall'
                         : 'originally-wide'
                     }
                />
            </div>
            <Hnum num={3}>{artist_name}</Hnum>
            <Hnum num={4}>{track_title}</Hnum>
            <Hnum num={4}>{release_year}</Hnum>
            <div className="genres-wrp">
                <Ul className={'genre-tags'}>
                    <Span>Genres: </Span>
                    {genres && genres.map((item, index, arr) => {
                            return (
                                <Li className={'genre'} key={index}>
                                    <Ahref>
                                        <Hnum num={5}>
                                            {`${item}, `}
                                        </Hnum>
                                    </Ahref>
                                </Li>);
                        }
                    )}
                </Ul>
            </div>
            <div className="links-wrp">
                <Ul className={'links'}>
                    <Span>Links: </Span>
                    <Li className={'link'}>
                        {spanOrLink(link_apple_music,'apple')}
                    </Li>
                    <Li className={'link'}>
                        {spanOrLink(link_deezer,'deezer')}
                    </Li>
                    <Li className={'link'}>
                        {spanOrLink(link_spotify,'spotify')}
                    </Li>
                    <Li className={'link'}>
                        {spanOrLink(link_youtube,'youtube')}
                    </Li>
                </Ul>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    tracks: state.tracks,
    filters: state.filters,
    expandedItem: state.expandedItem
});

const mapDispatchToProps = dispatch => bindActionCreators({
    unexpand_track
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpandedItem);

