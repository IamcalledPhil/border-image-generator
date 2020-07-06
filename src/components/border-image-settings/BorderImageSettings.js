import React from 'react';
import { useSelector } from "react-redux";
import WidthSettings from './WidthSettings';
import OutsetSettings from './OutsetSettings';
import '../../styles/border-image-settings.scss';

const BorderImageSettings = () => {
  const svgURI = useSelector(state => state.imageCreator.svgURI);
  const borderWidth = useSelector(state => state.borderImage.borderWidth);
  const borderOutset = useSelector(state => state.borderImage.borderImageOutset);
  const demoDivStyle = {
    "borderStyle": "solid",
    "borderWidth": `${borderWidth.top} ${borderWidth.right} ${borderWidth.bottom} ${borderWidth.left}`,
    "borderImageSource": `url(${svgURI})`,
    "borderImageOutset": `${borderOutset.top} ${borderOutset.right} ${borderOutset.bottom} ${borderOutset.left}`,
    "borderImageSlice": `108 103 111 111`,
    "borderImageRepeat": `stretch stretch`,
    // should be able to set background color too in case don't want outset
    "backgroundColor": `#000000`
  }

  return (
    <div className="border-image-settings">
      <div className="demo-div" style={demoDivStyle}></div>
      <WidthSettings />
      <OutsetSettings />
    </div>
  )
};

export default BorderImageSettings;