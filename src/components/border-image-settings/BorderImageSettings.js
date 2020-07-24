import React from 'react';

import { useSelector } from "react-redux";
import UnitSettings from './UnitSettings';
import WidthSettings from './WidthSettings';
import OutsetSettings from './OutsetSettings';
import SliceSettings from './SliceSettings';
import RepeatSettings from './RepeatSettings';

import '../../styles/border-image-settings.scss';

const BorderImageSettings = () => {
  const svgURI = useSelector(state => state.imageCreator.svgURI);
  const imageColor = useSelector(state => state.imageCreator.imageColor);

  const unit = useSelector(state => state.borderImage.unit);
  const borderRepeat = useSelector(state => state.borderImage.borderImageRepeat);
  const borderWidth = useSelector(state => state.borderImage.borderWidth);
  const borderOutset = useSelector(state => state.borderImage.borderImageOutset);
  const borderSlice = useSelector(state => state.borderImage.borderImageSlice);
  const demoDivStyle = {
    "borderStyle": "solid",
    "borderImageWidth": `${borderWidth.top}${unit} ${borderWidth.right}${unit} ${borderWidth.bottom}${unit} ${borderWidth.left}${unit}`,
    "borderImageSource": `url(${svgURI})`,
    "borderImageOutset": `${borderOutset.top}${unit} ${borderOutset.right}${unit} ${borderOutset.bottom}${unit} ${borderOutset.left}${unit}`,
    "borderImageSlice": `${borderSlice.top} ${borderSlice.right} ${borderSlice.bottom} ${borderSlice.left}`,
    "borderImageRepeat": `${borderRepeat} ${borderRepeat}`,
    // should be able to set background color too in case don't want outset
    "backgroundColor": `${imageColor}`
  }

  return (
    <div className="border-image-settings">
      <div className="output">
        <div className="demo-div" style={demoDivStyle}></div>
        <div className="border-settings-text">
          <a href={svgURI}  download>Download image</a>

          <h3>CSS code</h3>
          <code>
            border-image-width: {demoDivStyle.borderImageWidth};<br/>
            border-image-slice: {demoDivStyle.borderImageSlice};<br/>
            border-image-outset: {demoDivStyle.borderImageOutset};<br/>
            border-image-repeat: {demoDivStyle.borderImageRepeat};<br/>
            border-style: {demoDivStyle.borderStyle};<br/>
            background-color: {demoDivStyle.backgroundColor};<br/>
          </code>
        </div>
      </div>
      <div className="input">
        <UnitSettings/>
        <WidthSettings/>
        <OutsetSettings/>
        <SliceSettings/>
        <RepeatSettings/>
      </div>
    </div>
  )
};

export default BorderImageSettings;