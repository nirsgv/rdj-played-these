import uuid from 'uuid';
export const FETCH_TRACKS = 'tracks/FETCH_TRACKS';
export const EXPAND_TRACK = 'tracks/EXPAND_TRACK';
export const UNEXPAND_TRACK = 'tracks/UNEXPAND_TRACK';


const initialState = {
    tracksData: 2,
    selectedTrackId: null,
    expanded: null,
};

export default (state = initialState, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
      case EXPAND_TRACK:
          return {
          ...state,
          selectedTrackId: action.payload,
          expanded: true
      };
      case UNEXPAND_TRACK:
          return {
          ...state,
          expanded: action.payload
      };
      case FETCH_TRACKS:

          return {
          ...state,
          tracksData: action.payload
      };
    default:
      return state;
  }
}

export const expand_track = (id) => {
    console.log(id);
    return dispatch => {
        dispatch({
            type: EXPAND_TRACK,
            payload: id
        })
    }
};

export const unexpand_track = () => {
    return dispatch => {
        dispatch({
            type: UNEXPAND_TRACK,
            payload: false
        })
    }
};

export const fetch_tracks = (res) => {
    let resWithIds = res.map((item, index, arr) => {
        item.id = uuid.v4();
            return item;
        }
    );
    return dispatch => {
        dispatch({
            type: FETCH_TRACKS,
            payload: resWithIds
        })
    }
};





