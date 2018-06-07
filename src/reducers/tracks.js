import uuid from 'uuid';
export const FETCH_TRACKS = 'tracks/FETCH_TRACKS';
export const EXPAND_TRACK = 'tracks/EXPAND_TRACK';


const initialState = {
    tracksData: 2,
    selectedTrackId: null,
};

export default (state = initialState, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
      case EXPAND_TRACK:
          return {
          ...state,
          selectedTrackId: action.payload
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





