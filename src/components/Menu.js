import React, { Component } from 'react';




class Menu extends Component {

constructor(props) {
    super(props);
}
render() {
    //console.log(this.props.data.menu_items);
    let menuItems;
    menuItems = this.props.data.menu_items.map((layer,index,array) => {
        return(
        <li key={index}>{layer}</li>
        )
    });
    console.log(menuItems);
    return(
        <div className="menu-holder">
            <ul className="menu">

                {menuItems}

            </ul>
        </div>
    )
}
}



export default Menu;


