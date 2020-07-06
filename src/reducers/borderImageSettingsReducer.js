import { 
  SET_TOP_BORDER_WIDTH,
  SET_RIGHT_BORDER_WIDTH,
  SET_BOTTOM_BORDER_WIDTH,
  SET_LEFT_BORDER_WIDTH,
  SET_TOP_BORDER_OUTSET,
  SET_RIGHT_BORDER_OUTSET,
  SET_BOTTOM_BORDER_OUTSET,
  SET_LEFT_BORDER_OUTSET  
} from "../constants/action-types";

const initialState = {
  borderWidth: { 
      top: "50px",
      right: "50px",
      bottom: "50px",
      left: "50px"
    },
    borderImageOutset: { 
      top: "50px",
      right: "50px",
      bottom: "50px",
      left: "50px"
    }
};
  
/**
 * Sets the state for the settings of the brush strokes
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function borderImageSettingsReducer(state = initialState, action) {
    if (action.type === SET_TOP_BORDER_WIDTH) {
      return {...state, 
        borderWidth: {
          ...state.borderWidth,
          top: action.payload
        } 
      };
    } else if (action.type === SET_RIGHT_BORDER_WIDTH) {
      return {...state, 
        borderWidth: {
          ...state.borderWidth,
          right: action.payload
        } 
      };
    } else if (action.type === SET_BOTTOM_BORDER_WIDTH) {
      return {...state, 
        borderWidth: {
          ...state.borderWidth,
          bottom: action.payload
        } 
      };
    } else if (action.type === SET_LEFT_BORDER_WIDTH) {
      return {...state, 
        borderWidth: {
          ...state.borderWidth,
          left: action.payload
        } 
      };
    } else if (action.type === SET_TOP_BORDER_OUTSET) {
      return {...state, 
        borderImageOutset: {
          ...state.borderImageOutset,
          top: action.payload
        } 
      };
    } else if (action.type === SET_RIGHT_BORDER_OUTSET) {
      return {...state, 
        borderImageOutset: {
          ...state.borderImageOutset,
          right: action.payload
        } 
      };
    } else if (action.type === SET_BOTTOM_BORDER_OUTSET) {
      return {...state, 
        borderImageOutset: {
          ...state.borderImageOutset,
          bottom: action.payload
        } 
      };
    } else if (action.type === SET_LEFT_BORDER_OUTSET) {
      return {...state, 
        borderImageOutset: {
          ...state.borderImageOutset,
          left: action.payload
        } 
      };
    } 
    return state;
  }


export default borderImageSettingsReducer;