import React from 'react';
import { ParallaxProvider ,Parallax } from 'react-scroll-parallax';
import { getItemById } from '../helper_functions'

import square from '../assets/svg/square.svg'
const BackgroundLayer = (props) => {
    const { selectedTrackId , tracksData=[] ,docScrollHeight} = props;

    const item = getItemById(selectedTrackId, tracksData);
    console.log(item);
    const styleObj = item.artwork ? {
        backgroundImage:item.artwork.sizes.large
    } : {backgroundImage:'3'};
    console.log(styleObj);

    const tmp = docScrollHeight/20;

    return (
        <div className="bkg-wrp" >



            <div className="bkg" style={{backgroundImage: `url(${styleObj.backgroundImage})`, backgroundPositionY: `${tmp}px` }} />

{/*
                <Parallax
                    className="custom-class"
                    offsetYMax={4}
                    offsetYMin={-4}
                    slowerScrollRate
                    tag="figure"
                    styleOuter={{position: 'absolute', top: 0,width: '100%',height: '100%'}}
                    styleInner={{position: 'absolute', top: ,width: '100%',height: '100%'}}
                >
                    <div className="bkg" style={{backgroundImage: `url(${styleObj.backgroundImage})`}} />
                </Parallax>
                    <img className="parallex-image" src={styleObj.backgroundImage} alt=""/>
            <div className="bkg" style={{backgroundImage: `url(${styleObj.backgroundImage})`, transform: `translate3d(0,${tmp*10}%,0)`}} />

                <div className="bkg" style={{backgroundImage: `url(${styleObj.backgroundImage})`, transform: `translateY(${tmp}%)`}} />
*/}


                <div className="bkg-color" />
                <div className="bkg2" style={{backgroundImage: `url(${square})`}} />
        </div>
    );
};
BackgroundLayer.defaultProps = {selectedTrackId:3,tracksData:[]};

export default BackgroundLayer;