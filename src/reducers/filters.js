import uuid from 'uuid';

export const EXPAND_FILTER = 'filters/EXPAND_FILTER';
export const TOGGLE_CHOSEN_DETAIL= 'filters/TOGGLE_CHOSEN_DETAIL';


const initialState = {
    filter_group: [
        {
            tags_filter: {
                activated: true,
                expanded: false,
                tagName: 'genres',
                items: [
                {
                    name:"abstract",
                    chosen: false
                },
                {
                    name:"acidHouse",
                    chosen: false
                },
                {
                    name:"ambient",
                    chosen: false
                },
                {
                    name:"base",
                    chosen: false
                },
                {
                    name:"dnb",
                    chosen: false
                },
                {
                    name:"dubstep",
                    chosen: false
                },
                {
                    name:"electronica",
                    chosen: false
                },
                {
                    name:"footwork",
                    chosen: false
                },
                {
                    name:"grime",
                    chosen: false
                },
                {
                    name:"hipHop",
                    chosen: false
                },
                {
                    name:"house",
                    chosen: false
                },
                {
                    name:"industrial",
                    chosen: false
                },
                {
                    name:"noise",
                    chosen: false
                },
                {
                    name:"techno",
                    chosen: false
                }
                ],
                chosen_items: [

                ]
            }
        },
        {
            decade_filter: {
                activated: true,
                expanded: false,
                tagName: 'decade',
                items: [
                    {
                        name:"80-85",
                        chosen: false
                    },                {
                        name:"85-90",
                        chosen: false
                    },                {
                        name:"90-95",
                        chosen: false
                    },                {
                        name:"95-00",
                        chosen: false
                    },                {
                        name:"00-05",
                        chosen: false
                    },                {
                        name:"05-10",
                        chosen: false
                    },                {
                        name:"10-15",
                        chosen: false
                    },                {
                        name:"15-20",
                        chosen: false
                    }
            ]
            }
        },
        {
            decade_filter2: {
                activated: true,
                expanded: false,
                tagName: 'decade',
                items: [
                    {
                        name:"80-85",
                        chosen: false
                    },                {
                        name:"85-90",
                        chosen: false
                    },                {
                        name:"90-95",
                        chosen: false
                    },                {
                        name:"95-00",
                        chosen: false
                    },                {
                        name:"00-05",
                        chosen: false
                    },                {
                        name:"05-10",
                        chosen: false
                    },                {
                        name:"10-15",
                        chosen: false
                    },                {
                        name:"15-20",
                        chosen: false
                    }
                ]

            }
        }
    ],
    selectedTrackId: null,
};

export default (state = initialState, action) => {
    console.log(state);
    console.log(action.payload);
    switch (action.type) {
        case EXPAND_FILTER:
            return {
                ...state,
                filter_group: action.payload
            };
        case TOGGLE_CHOSEN_DETAIL:
            return {
                ...state,
                filter_group: action.payload
            };
        default:
            return state;
    }
}

export const expand_filter = (itemIndex,filter_group) => {
    let filter_group_expand_toggled = filter_group.map((item, index, arr) => {
        const tmpKey =  Object.keys(item)[0];
        itemIndex === index ? item[tmpKey].expanded = true : item[tmpKey].expanded = false;
            return item;
        }
    );
    return dispatch => {
        dispatch({
            type: EXPAND_FILTER,
            payload: filter_group_expand_toggled
        })
    }
};

export const toggle_chosen_detail = (itemIndex,filter_group) => {
    let chosen_toggled_filter_group = filter_group.map((item, index, arr) => {
        const tmpKey =  Object.keys(item)[0];
        console.log('item',item);
        console.log('arr',arr);
        console.log('tmpKey',tmpKey);
        console.log(item[tmpKey].expanded);
        const active = item[tmpKey].expanded;
        const itemsLenForTmpkey = item[tmpKey].items.length;
        console.log( item[tmpKey].items[itemIndex]);
        //const ddddd = item[tmpKey].items[itemIndex].chosen;
        console.log(tmpKey);
        console.log(active);
        console.log(item[tmpKey]===arr[tmpKey]);
       if(itemIndex<itemsLenForTmpkey) {item[tmpKey].items[itemIndex].chosen = (active ? !item[tmpKey].items[itemIndex].chosen : item[tmpKey].items[itemIndex].chosen)};
            return item;
        }
    );
    return dispatch => {
        dispatch({
            type: TOGGLE_CHOSEN_DETAIL,
            payload: chosen_toggled_filter_group
        })
    }
};

