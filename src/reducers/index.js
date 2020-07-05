import { SET_SVG_URI, SET_STROKE_LENGTH, SET_STROKE_WIDTH, SET_STROKE_NUMBER } from "../constants/action-types";

const initialState = {
  svgURI: '',
  strokeLength: 1,
  strokeWidth: 1,
  strokeNumber: 6
  };
  
/**
 * Sets the state for the settings of the brush strokes
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function settingsReducer(state = initialState, action) {
    if (action.type === SET_SVG_URI) {
      return Object.assign({}, state, {
        svgURI: action.payload
      });
    } else if (action.type === SET_STROKE_LENGTH){ 
      return Object.assign({}, state, {
        strokeLength: action.payload
      });
    } 
    return state;
  }


export default settingsReducer;