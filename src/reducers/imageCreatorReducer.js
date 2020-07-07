import { SET_SVG_URI, 
  SET_IMAGE_COLOR,
  SET_STROKE_LENGTH, 
  SET_STROKE_WIDTH, 
  SET_FIRST_STROKE_NUMBER,
  SET_SECOND_STROKE_NUMBER,
  SET_THIRD_STROKE_NUMBER,
  SET_FOURTH_STROKE_NUMBER,
  SET_FIFTH_STROKE_NUMBER
} from "../constants/action-types";

const initialState = {
  svgURI: '',
  imageColor: '#000000',
  strokeLength: 1,
  strokeWidth: 1,
  firstStrokeNumber: 6,
  secondStrokeNumber: 6,
  thirdStrokeNumber: 5,
  fourthStrokeNumber: 3,
  fithStrokeNumber: 4
};
  
/**
 * Sets the state for the settings of the brush strokes
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function imageCreatorReducer(state = initialState, action) {
    if (action.type === SET_SVG_URI) {
      return Object.assign({}, state, {
        svgURI: action.payload
      });
    } else if (action.type === SET_STROKE_LENGTH){ 
      return Object.assign({}, state, {
        strokeLength: action.payload
      });
    } else if (action.type === SET_STROKE_WIDTH){ 
      return Object.assign({}, state, {
        strokeWidth: action.payload
      });
    } else if (action.type === SET_FIRST_STROKE_NUMBER){ 
      return Object.assign({}, state, {
        firstStrokeNumber: action.payload
      });
    } else if (action.type === SET_SECOND_STROKE_NUMBER){ 
      return Object.assign({}, state, {
        secondStrokeNumber: action.payload
      });
    } else if (action.type === SET_THIRD_STROKE_NUMBER){ 
      return Object.assign({}, state, {
        thirdStrokeNumber: action.payload
      });
    } else if (action.type === SET_FOURTH_STROKE_NUMBER){ 
      return Object.assign({}, state, {
        fourthStrokeNumber: action.payload
      });
    } else if (action.type === SET_FIFTH_STROKE_NUMBER){ 
      return Object.assign({}, state, {
        fifthStrokeNumber: action.payload
      });
    }  else if (action.type === SET_IMAGE_COLOR){ 
      return Object.assign({}, state, {
        imageColor: action.payload
      });
    } 
    return state;
  }


export default imageCreatorReducer;