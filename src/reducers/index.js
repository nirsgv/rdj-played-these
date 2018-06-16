import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tracks from './tracks';
import expandedItem from './expandedItem';
import filters from './filters';
import document from './document';

export default combineReducers({
  router: routerReducer,
  tracks,
  expandedItem,
  filters,
  document
  //layers,
  //ranger,
  //counter,
  //bkgSelectionPopup
})
