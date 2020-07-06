import { 
  SET_TOP_BORDER_WIDTH
} from "../constants/action-types";

const initialState = {
  borderWidth: { 
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
    } 
    return state;
  }


export default borderImageSettingsReducer;