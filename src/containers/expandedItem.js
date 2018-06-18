import React, { Fragment } from 'react';
import ReactPlayerWrp from './reactPlayerWrp/reactPlayerWrp'

import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { getItemById } from '../helper_functions'
import { Img, Hnum, Ahref, Span, Ul, Li } from '../components/htmlGroup';
import { unexpand_track, expand_track, set_youtube_track_url } from '../reducers/tracks';

// console.log(unexpand_track);
// console.log('set_youtube_track_url',set_youtube_track_url);

const ExpandedItem = ({children, className='', tracks=[], filters=[], id='', expandedItem={}, unexpand_track, set_youtube_track_url}) => {
// console.log(unexpand_track);
// console.log(set_youtube_track_url);
    const {tracksData,selectedTrackId=null,expanded=false, youtubeTrackUrl=null} = tracks;
    const item = getItemById(selectedTrackId, tracksData);
    return(
        <div className={`expanded-item-holder ${expanded ? 'active' : 'unactive'}`} id={id}>
            {
                (!(selectedTrackId === null)) &&
                <Fragment>
                    <ReactPlayerWrp youtubeTrackUrl={youtubeTrackUrl}/>
                    <ExpandedInner item={item} unexpand_track={unexpand_track}
                                   set_youtube_track_url={set_youtube_track_url}
                                   expand_track={expand_track}></ExpandedInner>

                </Fragment>
            }
        </div>
    )
};

const ExpandedInner = (props) => {

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
        set_youtube_track_url,
    } = props;

    const {
        link_apple_music,
        link_deezer,
        link_spotify,
        link_youtube
    } = props.item.links;


    console.log(props.item);
    console.log(props.item.artist_name);
    const SpanOrLink = ({link, txtLabel, children}) => {
        return (
            link ? <Ahref className={`${txtLabel}-link ${link ? 'available' : 'unavailable'}`} href={link}>{children}</Ahref>
                : <Span className={`${txtLabel} ${link ? 'available' : 'unavailable'}`}>{children}</Span>
        )};

    return(
        <div className="expanded-item-inner-wrp">
            <button onClick={() => unexpand_track()}>Lower</button>
            <div className="expanded-tab-thumb-image">
                {artwork.sizes && console.log(artwork.sizes)}
                <Img src={artwork.sizes ? artwork.sizes.thumbnail : ''}
                     alt={artwork.alt}
                     className={artwork.sizes && artwork.sizes['thumbnail-height']>artwork.sizes['large-width']
                         ? 'originally-tall'
                         : 'originally-wide'
                     }
                />
            </div>
            <div className="expanded-item-inner-txt-wrp">
                <Hnum num={3} className="expanded-item-inner-txt">{artist_name}</Hnum>
                <Hnum num={4} className="expanded-item-inner-txt">{track_title}</Hnum>
                <Hnum num={4} className="expanded-item-inner-txt">{release_year}</Hnum>
            </div>
            <div className="genres-wrp">
                <Ul className={'genre-tags'}>
                    <Span>Genres: </Span>
                    {genres && genres.map((item, index, arr) => {
                            return (
                                <Li className={'genre'} key={index}>
                                    <Ahref target='blank'>
                                        <Hnum num={5} >
                                            {`${item}, `}
                                        </Hnum>
                                    </Ahref>
                                </Li>);
                        }
                    )}
                </Ul>
            </div>
            <div className="play-wrp">
                <button className={`btn play ${link_youtube ? 'active' : 'not-active'}`} onClick={() => set_youtube_track_url(link_youtube)}>Play</button>
            </div>
            <div className="links-wrp">
                <Ul className={'links'}>
                    <Span>Links: </Span>
                    <Li className={'link'}>
                        <SpanOrLink link={link_apple_music} txtLabel={'apple'}>
                            <i className="fab fa-apple"></i>
                            <Span className='link-txt'>apple</Span>
                        </SpanOrLink>
                    </Li>
                    <Li className={'link'}>
                        <SpanOrLink link={link_deezer} txtLabel={'deezer'}>
                            <i className="fas fa-music"></i>
                            <Span className='link-txt'>deezer</Span>
                        </SpanOrLink>
                    </Li>
                    <Li className={'link'}>
                        <SpanOrLink link={link_spotify} txtLabel={'spotify'}>
                            <i className="fab fa-spotify"></i>
                            <Span className='link-txt'>spotify</Span>
                        </SpanOrLink>
                    </Li>
                    <Li className={'link'}>
                        <SpanOrLink link={link_youtube} txtLabel={'youtube'}>
                            <i className="fab fa-youtube"></i>
                            <Span className='link-txt'>youtube</Span>
                        </SpanOrLink>
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
    unexpand_track,
    set_youtube_track_url
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpandedItem);

