import borderImageSettingsReducer from './borderImageSettingsReducer';
import imageCreatorReducer from './imageCreatorReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({  
    borderImage: borderImageSettingsReducer,  
    imageCreator: imageCreatorReducer
});

export default rootReducer;