import React from 'react';
import { useSelector } from "react-redux";
import WidthSettings from './WidthSettings';
import OutsetSettings from './OutsetSettings';
import SliceSettings from './SliceSettings';
import RepeatSettings from './RepeatSettings';

import '../../styles/border-image-settings.scss';

const BorderImageSettings = () => {
  const svgURI = useSelector(state => state.imageCreator.svgURI);
  const imageColor = useSelector(state => state.imageCreator.imageColor);
  const borderRepeat = useSelector(state => state.borderImage.borderImageRepeat);
  const borderWidth = useSelector(state => state.borderImage.borderWidth);
  const borderOutset = useSelector(state => state.borderImage.borderImageOutset);
  const borderSlice = useSelector(state => state.borderImage.borderImageSlice);
  console.log(borderRepeat);
  const demoDivStyle = {
    "borderStyle": "solid",
    "borderWidth": `${borderWidth.top} ${borderWidth.right} ${borderWidth.bottom} ${borderWidth.left}`,
    "borderImageSource": `url(${svgURI})`,
    "borderImageOutset": `${borderOutset.top} ${borderOutset.right} ${borderOutset.bottom} ${borderOutset.left}`,
    "borderImageSlice": `${borderSlice.top} ${borderSlice.right} ${borderSlice.bottom} ${borderSlice.left}`,
    "borderImageRepeat": `${borderRepeat} ${borderRepeat}`,
    // should be able to set background color too in case don't want outset
    "backgroundColor": `${imageColor}`
  }

  return (
    <div className="border-image-settings">
      <div className="demo-div" style={demoDivStyle}></div>
      <WidthSettings />
      <OutsetSettings />
      <SliceSettings/>
      <RepeatSettings/>
    </div>
  )
};

export default BorderImageSettings;