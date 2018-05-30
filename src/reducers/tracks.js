import uuid from 'uuid';
export const FETCH_TRACKS = 'tracks/FETCH_TRACKS';

const initialChosenLayedId = uuid.v4();

const initialState = {
    tracksData: 2,
    layerCount: 2,
    chosenLayerId: initialChosenLayedId,
    chosenLayerIdx: 0,
};

export default (state = initialState, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
      case FETCH_TRACKS:
      return {
          ...state,
          tracksData: action.payload
      };
    default:
      return state;
  }
}

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





