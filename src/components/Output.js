import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
 
import { useSelector } from "react-redux";

import '../styles/output.scss';

const Output = () => {
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
      <div className="output">
        <h1>Result:</h1>
        <div className="output-content">
          <div className="demo-div" style={demoDivStyle}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <a href={svgURI}  download><FontAwesomeIcon icon={faDownload} />Download image</a>

          <div className="output-code">
            <h3>CSS code</h3>
            <div className="border-settings-text">

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
        </div>
        
      </div>
      
  )
};

export default Output;