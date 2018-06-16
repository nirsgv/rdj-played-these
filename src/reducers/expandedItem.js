import uuid from 'uuid';

export const EXPAND_FILTER = 'expandedItem/EXPAND_FILTER';


const initialState = {
    expanded: false,
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
        default:
            return state;
    }
}


export const expand_filter = (par) => {
    return dispatch => {
        dispatch({
            type: EXPAND_FILTER,
            payload: par
        })
    }
};
