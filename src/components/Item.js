import React, { Component } from 'react';
import { Img, Hnum, Ahref, Span, Ul, Li } from './htmlGroup';
import Label from './Label';
import {set_filtering_now} from "../reducers/filters";
class Item extends Component {
    constructor(props){
        super(props);
        //set_scroll_offset = const set_scroll_offset.bind
        this.state={
            entrance_anima_finished:false
        }
    };

    finishAnima () {
        this.setState({entrance_anima_finished:true})
};

render() {
    const { filtering_now } = this.props;
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
    } = this.props.item;
    // console.log(artwork);
    // genres && console.log(genres);
    // show && console.log(show);
    const {
        link_apple_music,
        link_deezer,
        link_spotify,
        link_youtube
    } = links;
    const spanOrLink = (link, txtLabel) => {
        return (
            link ? <Ahref className={`${txtLabel}-link ${link ? 'available' : 'unavailable'}`} href={link}>{txtLabel}</Ahref>
                : <Span className={`${txtLabel} ${link ? 'available' : 'unavailable'}`}>{txtLabel}</Span>
        )};
    return(
        <div className={`thumb ${!(this.state.entrance_anima_finished) ? 'anima-enlarge' : 'anima-finished'} ${filtering_now ? 'filtering_now' : ''}`}
             onClick={() => {this.props.expand_track(id);}}
             onAnimationEnd={() => {this.finishAnima();set_filtering_now(false)}}

        >

            <div className="thumb-image">
                <Img src={artwork.sizes ? artwork.sizes.large : ''}
                     alt={artwork.alt}
                     className={artwork.sizes && artwork.sizes['large-height']>artwork.sizes['large-width']
                     ? 'originally-tall'
                     : 'originally-wide'
                     }
                />
            </div>
             <Hnum num={3} className={`grid-item-txt`}>{artist_name}</Hnum>
             <Hnum num={4} className={`grid-item-txt`}>{track_title}</Hnum>
             <Hnum num={4} className={`grid-item-txt`}>{release_year}</Hnum>




            {/*<div className="links-wrp">
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
            </div>*/}

        </div>
        )

}
}




export default Item;


