import { SET_SVG_URI, SET_STROKE_LENGTH, SET_STROKE_WIDTH, SET_STROKE_NUMBER } from "../constants/action-types";

/**
* Action creators for user actions
*/

export function setSVGUri(payload) {
    return { type: SET_SVG_URI, payload }
}

export function setStrokeLength(payload) {
    return { type: SET_STROKE_LENGTH, payload }
}