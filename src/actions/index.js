import { SET_SVG_URI,
   SET_STROKE_LENGTH, 
   SET_STROKE_WIDTH, 
   SET_FIRST_STROKE_NUMBER,
   SET_SECOND_STROKE_NUMBER,
   SET_THIRD_STROKE_NUMBER,
   SET_FOURTH_STROKE_NUMBER,
   SET_FIFTH_STROKE_NUMBER,
   SET_TOP_BORDER_WIDTH,
   SET_RIGHT_BORDER_WIDTH,
   SET_BOTTOM_BORDER_WIDTH,
   SET_LEFT_BORDER_WIDTH,
   SET_TOP_BORDER_OUTSET,
   SET_RIGHT_BORDER_OUTSET,
   SET_BOTTOM_BORDER_OUTSET,
   SET_LEFT_BORDER_OUTSET  
 } from "../constants/action-types";

/**
* Action creators for image creator
*/

export function setSVGUri(payload) {
    return { type: SET_SVG_URI, payload }
}

export function setStrokeLength(payload) {
    return { type: SET_STROKE_LENGTH, payload }
}

export function setStrokeWidth(payload) {
  return { type: SET_STROKE_WIDTH, payload }
}

export function setFirstStrokeNumber(payload) {
  return { type: SET_FIRST_STROKE_NUMBER, payload }
}

export function setSecondStrokeNumber(payload) {
  return { type: SET_SECOND_STROKE_NUMBER, payload }
}

export function setThirdStrokeNumber(payload) {
  return { type: SET_THIRD_STROKE_NUMBER, payload }
}

export function setFourthStrokeNumber(payload) {
  return { type: SET_FOURTH_STROKE_NUMBER, payload }
}

export function setFifthStrokeNumber(payload) {
  return { type: SET_FIFTH_STROKE_NUMBER, payload }
}

/**
* Action creators for border image settings
*/

// border width
export function setTopBorderWidth(payload) {
  return { type: SET_TOP_BORDER_WIDTH, payload }
}

export function setRightBorderWidth(payload) {
  return { type: SET_RIGHT_BORDER_WIDTH, payload }
}

export function setBottomBorderWidth(payload) {
  return { type: SET_BOTTOM_BORDER_WIDTH, payload }
}

export function setLeftBorderWidth(payload) {
  return { type: SET_LEFT_BORDER_WIDTH, payload }
}

// border outset
export function setTopBorderOutset(payload) {
  return { type: SET_TOP_BORDER_OUTSET, payload }
}

export function setRightBorderOutset(payload) {
  return { type: SET_RIGHT_BORDER_OUTSET, payload }
}

export function setBottomBorderOutset(payload) {
  return { type: SET_BOTTOM_BORDER_OUTSET, payload }
}

export function setLeftBorderOutset(payload) {
  return { type: SET_LEFT_BORDER_OUTSET, payload }
}