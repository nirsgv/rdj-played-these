import React from 'react'
import square from '../assets/svg/square.svg'
const BackgroundLayer = (props) => {
    const { selectedTrackId , tracksData=[] } = props;

    const getItemById = (selectedTrackId, itemList) => {
        const filteredItems = (Array.isArray(itemList) && (typeof selectedTrackId === 'string' || typeof selectedTrackId === 'number'))
                            ? itemList.filter((item)=>{ return item.id===selectedTrackId && item})
                            : [{}];
        return (
            filteredItems[0]
        )
    };
    const item = getItemById(selectedTrackId, tracksData);
    console.log(item);
    const styleObj = item.artwork ? {
        backgroundImage:item.artwork.sizes.large
    } : {backgroundImage:'3'};
    console.log(styleObj);

    return (
        <div className="bkg wrp" >
            <div className="bkg" style={{backgroundImage: `url(${styleObj.backgroundImage})`}} />
            <div className="bkg2" style={{backgroundImage: `url(${square})`}} />
            <img src={styleObj.backgroundImage} alt=""/>
        </div>
    );
};
BackgroundLayer.defaultProps = {selectedTrackId:3,tracksData:[]};

export default BackgroundLayer;