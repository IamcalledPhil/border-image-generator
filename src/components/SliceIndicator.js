import React from 'react';
import { useSelector } from "react-redux";

import '../styles/image-creator.scss';

const SliceIndicator = () => {

  const borderSlice = useSelector(state => state.borderImage.borderImageSlice); 
  const topStyle={width:"100%", height:5, top:borderSlice.top};
  return (
    <div className="svg-overlay"> 
          <div className="slider" 
            style={{width:"100%", height:5, top:borderSlice.top}}></div>
          <div className="slider" 
            style={{width:5, height:"100%", right:borderSlice.right}}/>
          <div className="slider" 
            style={{width:"100%", height:5, bottom:borderSlice.bottom}}/>
          <div className="slider" 
            style={{width:5, height:"100%", left :borderSlice.left}}/>
    </div>

  )
}

export default SliceIndicator;