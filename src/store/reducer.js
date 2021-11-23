import {combineReducers} from 'redux';

import imagesReducer from './imagesSlice';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
