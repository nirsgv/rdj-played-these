import React, { Component } from 'react';
import { Img, Hnum, Ahref, Span, Ul, Li } from './HtmlGroup';
import Label from './Label';

const Item = (props) => {
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
    console.log(artwork);
    genres && console.log(genres);
    show && console.log(show);
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
        <div className="thumb" onMouseEnter={() => {props.expand_track(id)}}>
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




export default Item;


