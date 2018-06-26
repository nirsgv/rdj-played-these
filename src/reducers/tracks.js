import uuid from 'uuid';
export const FETCH_TRACKS = 'tracks/FETCH_TRACKS';
export const EXPAND_TRACK = 'tracks/EXPAND_TRACK';
export const UNEXPAND_TRACK = 'tracks/UNEXPAND_TRACK';
export const SET_YOUTUBE_TRACK_URL = 'tracks/SET_YOUTUBE_TRACK_URL';


const initialState = {
    tracksData: 2,
    selectedTrackId: null,
    nowPlayingdTrackId: null,
    youtubeTrackUrl: null,
    expanded: null,
};

export default (state = initialState, action) => {
  // console.log(state);
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
      case SET_YOUTUBE_TRACK_URL:

          return {
          ...state,
          youtubeTrackUrl: action.payload[0],
          nowPlayingdTrackId: action.payload[1]
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

export const set_youtube_track_url = (url,id) => {
    console.log(url);
    return dispatch => {
        dispatch({
            type: SET_YOUTUBE_TRACK_URL,
            payload: [url,id]
        })
    }
};
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





