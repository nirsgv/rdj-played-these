import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tracks from './tracks';
import filters from './filters';

export default combineReducers({
  router: routerReducer,
  tracks,
  filters,
  //layers,
  //ranger,
  //counter,
  //bkgSelectionPopup
})
