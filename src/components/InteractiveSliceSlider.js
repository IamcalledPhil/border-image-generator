import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Draggable from 'react-draggable';
import {setTopBorderSlice,
        setRightBorderSlice,
        setBottomBorderSlice,
        setLeftBorderSlice,
} from '../actions';
import '../styles/image-creator.scss';

const InteractiveSliceSlider = props => {

  const borderSlice = useSelector(state => state.borderImage.borderImageSlice);
  const dispatch = useDispatch();
  const handleSetBorderSlice = (event, data) => {

    console.log(data.y);

    switch (event.target.id){
      case "slider-top":
        dispatch(setTopBorderSlice(data.y));
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
    <div className="svg-overlay"> 
      <Draggable
      x={borderSlice.top}
      onDrag={handleSetBorderSlice}
      bounds={{top: 0, right: 0, bottom: props.parentHeight-borderSlice.top, left: 0}}>
        <div className="slider-top" id="slider-top"
          style={{width:"100%", height:5 }}/>
      </Draggable>
    </div>

  )
}

export default InteractiveSliceSlider;