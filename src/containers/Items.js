import React, { Component } from 'react';
import Item from '../components/Item';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import { Ul } from '../components/HtmlGroup';

const Items = ({children, className='', id='', tracks=[]}) => {


/*    let mainItems,
        filteredItems,
        filteredItemsDisplay,
        selectedFilter;
    mainItems=this.props.data.shows;
    selectedFilter=this.props.data.filtered_by[0];
    filteredItems = mainItems.filter(
        show => show.tags.includes(selectedFilter) ||
        selectedFilter==='ALL_TAG'
    );
    filteredItemsDisplay = filteredItems.map((layer,index,array) => {
        const id = layer.id;
        return(
        <li className="item"
            key={index}
            onClick={this.props.openPopup.bind(this,id)}
            dataId={layer.id}
        >
           <Item data={layer}
           />
        </li>
        )
    });*/
    //console.log(mainItems);
    //console.log(filteredItems);
    console.log(tracks.tracksData);
    return(
        <div className="items-holder">
            <Ul className="items">
                {
                Array.isArray(tracks.tracksData)
                    ? tracks.tracksData.map((item, index, arr) => {
                        return (<Item key={index} item={item}>123</Item>)
                    })
                    : ''
                }
            </Ul>
        </div>
    )
};

const mapStateToProps = state => ({
    tracks: state.tracks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //changePage: () => push('/about-us'),
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Items);

