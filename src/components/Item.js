import React, { Component } from 'react';
import { Img, Hnum } from './HtmlGroup';
import Label from './Label';


const Item = (props) => {
    const {
    album_title,
    artist_name,
    artwork,
    id,
    links,
    record_label,
    release_year,
    track_title
} = props.item;
    console.log(artwork);
    const {
        link_apple_music,
        link_deezer,
        link_spotify,
        link_youtube
    } = links;
        return(
        <div className="thumb">
            <div className="thumb-image">
                <Img src={artwork.sizes ? artwork.sizes.thumbnail : ''}
                     alt={artwork.alt}
                />
            </div>
             <Hnum num={3}>{artist_name}</Hnum>
             <Hnum num={4}>{track_title}</Hnum>
             <Hnum num={4}>{release_year}</Hnum>
        </div>
        )

}




export default Item;


