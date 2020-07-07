import { 
  SET_TOP_BORDER_WIDTH,
  SET_RIGHT_BORDER_WIDTH,
  SET_BOTTOM_BORDER_WIDTH,
  SET_LEFT_BORDER_WIDTH,
  SET_TOP_BORDER_OUTSET,
  SET_RIGHT_BORDER_OUTSET,
  SET_BOTTOM_BORDER_OUTSET,
  SET_LEFT_BORDER_OUTSET,
  SET_TOP_BORDER_SLICE,
  SET_RIGHT_BORDER_SLICE,
  SET_BOTTOM_BORDER_SLICE,
  SET_LEFT_BORDER_SLICE,
  SET_REPEAT,
  SET_UNIT
} from "../constants/action-types";

const initialState = {
  borderWidth: { 
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    },
    borderImageOutset: { 
      top: 50,
      right: 50,
      bottom: 50,
      left: 50
    },
    borderImageSlice: { 
      top: 110,
      right: 110,
      bottom: 110,
      left: 110
    },
    borderImageRepeat: "stretch",
    unit: 'px'
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
        borderImageSlice: {
          ...state.borderImageSlice,
          left: action.payload
        } 
      };
    }  else if (action.type === SET_TOP_BORDER_SLICE) {
      return {...state, 
        borderImageSlice: {
          ...state.borderImageSlice,
          top: action.payload
        } 
      };
    } else if (action.type === SET_RIGHT_BORDER_SLICE) {
      return {...state, 
        borderImageSlice: {
          ...state.borderImageSlice,
          right: action.payload
        } 
      };
    } else if (action.type === SET_BOTTOM_BORDER_SLICE) {
      return {...state, 
        borderImageSlice: {
          ...state.borderImageSlice,
          bottom: action.payload
        } 
      };
    } else if (action.type === SET_LEFT_BORDER_SLICE) {
      return {...state, 
        borderImageSlice: {
          ...state.borderImageSlice,
          left: action.payload
        } 
      };
    } else if (action.type === SET_REPEAT) {
      return {...state, 
        borderImageRepeat: action.payload
      };
    } else if (action.type === SET_UNIT) {
      return {...state, 
        unit: action.payload
      };
    }
    return state;
  }


export default borderImageSettingsReducer;