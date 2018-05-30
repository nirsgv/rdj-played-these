import React, { Component } from 'react';


class Filter extends Component {
constructor(props) {
    super(props);
}
render() {
    let menuItems;
    menuItems = this.props.data.filter_items.map((layer,index,array) => {
        let gop = this.props.data.filters[index];
        return(
        <li key={index}
            //filterPurpose={this.props.data.filters[index]}
            onClick={this.props.setFilter.bind(this,gop)}
        >
            {layer}
        </li>
        )
    });
    //console.log(menuItems);
    return(
        <div className="menu-holder">
            <ul className="menu">
                {menuItems}
            </ul>
        </div>
    )
}
}



export default Filter;


