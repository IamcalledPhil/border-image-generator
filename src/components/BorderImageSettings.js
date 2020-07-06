import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import '../styles/border-image-settings.scss';
import {setTopBorderWidth } from '../actions';


const BorderImageSettings = () => {
  const dispatch = useDispatch();
  const svgURI = useSelector(state => state.imageCreator.svgURI);
  const borderWidth = useSelector(state => state.borderImage.borderWidth);
  const demoDivStyle = {
    "borderStyle": "solid",
    "borderWidth": `${borderWidth.top} 40px 50px 50px`,
    "borderImageSource": `url(${svgURI})`,
    "borderImageOutset": `52px 52px 57px 54px`,
    "borderImageSlice": `108 103 111 111`,
    "borderImageRepeat": `stretch stretch`,
    // should be able to set background color too in case don't want outset
    "backgroundColor": `#000000`
  }

  const handleSetBorderWidth = (event) => {
    switch (event.target.id){
      case "topwidth":
        dispatch(setTopBorderWidth(event.target.value));
        break;
      default:
        console.log("unrecognised side for border width");
    }
  }

  return (
    <div className="border-image-settings">
      <div className="demo-div" style={demoDivStyle}>
      </div>
      <section className="width-settings">
        <div className="top">
            <input type="text" value={borderWidth.top} 
            id="topwidth" 
            step="0.1"
            onChange={handleSetBorderWidth}/>
            <label htmlFor="topwidth">Top</label>
        </div>
      </section>
    </div>
  )
};

export default BorderImageSettings;