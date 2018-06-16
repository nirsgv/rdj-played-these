import uuid from 'uuid';

export const SET_SCROLL_OFFSET = 'filters/SET_SCROLL_OFFSET';

const initialState = {
    doc_offset_height: 0
};

export default (state = initialState, action) => {
    console.log(state);
    console.log(action.payload);
    switch (action.type) {
        case SET_SCROLL_OFFSET:
            return {
                ...state,
                doc_offset_height: action.payload
            };
        default:
            return state;
    }
}


export const set_scroll_offset = (par) => {
    return dispatch => {
        dispatch({
            type: SET_SCROLL_OFFSET,
            payload: par
        })
    }
};