import uuid from 'uuid';

export const EXPAND_FILTER = 'filters/EXPAND_FILTER';
export const TOGGLE_CHOSEN_DETAIL= 'filters/TOGGLE_CHOSEN_DETAIL';
export const ACTIVATE_FILTER= 'filters/ACTIVATE_FILTER';
export const SET_SEARCH_STRING= 'filters/SET_SEARCH_STRING';


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
            search: {
                searchFilter: true,
                activated: true,
                expanded: false,
                tagName: 'search',
                searchActiveString: '',
                items: [
                    {}
                ]

            }
        }
    ],
    selectedTrackId: null,
    searchActiveString: '',
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
            case ACTIVATE_FILTER:
            return {
                ...state,
                filter_group: action.payload
            };
        case TOGGLE_CHOSEN_DETAIL:
            return {
                ...state,
                filter_group: action.payload
            };
            case SET_SEARCH_STRING:
            return {
                ...state,
                searchActiveString: action.payload
            };
        default:
            return state;
    }
}

export const activate_filter = (filter_group,tmpKey) => {
    let itemIndex=null;
    if(tmpKey==='tags_filter'){itemIndex=0}
    if(tmpKey==='decade_filter'){itemIndex=1}
    if(tmpKey==='search'){itemIndex=2}
    let filter_group_activate_toggled = filter_group.map((item, index, arr) => {
        const tmpKey =  Object.keys(item)[0];

        console.log(item);
        console.log(item[tmpKey].activated);
        const act = item[tmpKey].activated;

        itemIndex === index && !item[tmpKey].activated ? item[tmpKey].activated = true : item[tmpKey].activated = false;
            return item;
        }
    );
    return dispatch => {
        dispatch({
            type: ACTIVATE_FILTER,
            payload: filter_group_activate_toggled
        })
    }
};

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
        const itemsLenForTmpkey = item[tmpKey].items.length;
        const itemTmpKey = item[tmpKey];
       if(itemIndex<itemsLenForTmpkey) {itemTmpKey.items[itemIndex].chosen = (itemTmpKey.expanded ? !itemTmpKey.items[itemIndex].chosen : itemTmpKey.items[itemIndex].chosen)};
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

export const set_search_string = (par) => {

    return dispatch => {
        dispatch({
            type: SET_SEARCH_STRING,
            payload: par
        })
    }
};