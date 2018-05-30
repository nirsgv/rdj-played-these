import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tracks from './tracks';

export default combineReducers({
  router: routerReducer,
  tracks
  //layers,
  //filters,
  //ranger,
  //counter,
  //bkgSelectionPopup
})
