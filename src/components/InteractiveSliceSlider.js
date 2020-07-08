import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setTopBorderSlice,
        setRightBorderSlice,
        setBottomBorderSlice,
        setLeftBorderSlice,
} from '../actions';
import '../styles/image-creator.scss';

const InteractiveSliceSlider = () => {
  const borderSlice = useSelector(state => state.borderImage.borderImageSlice);
  const dispatch = useDispatch();
  const handleSetBorderSlice = (event) => {
    switch (event.target.id){
      case "topslice":
        dispatch(setTopBorderSlice(event.target.value));
        break;
      case "rightslice":
        dispatch(setRightBorderSlice(event.target.value));
        break;
      case "bottomslice":
        dispatch(setBottomBorderSlice(event.target.value));
        break;
      case "leftslice":
        dispatch(setLeftBorderSlice(event.target.value));
        break;
      default:
        console.log("unrecognised side for border outset");
    }
  }

  return (
    <g>
      <rect className="slider-top"
        x={0}
        y={borderSlice.top}
        width={"100%"}
        height={5}/>
    </g>

  )
}

export default InteractiveSliceSlider;