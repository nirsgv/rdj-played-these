import React, { Component } from 'react';
import Item from './Item';


class Items extends Component {

constructor(props) {
    super(props);
   // this.al = this.al.bind(this);

}

/*    al = (x,y) => {
        console.log(x);
    };*/
/*al(x,y){
    console.log(x);

}*/
render() {

    //console.log(this.props.data.shows);
    let mainItems,
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
    });
    //console.log(mainItems);
    //console.log(filteredItems);
    return(
        <div className="items-holder">
            <ul className="items">

                {filteredItemsDisplay}

            </ul>
        </div>
    )
}
}



export default Items;


