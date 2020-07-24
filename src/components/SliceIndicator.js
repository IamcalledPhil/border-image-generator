import React from 'react';
import { useSelector } from "react-redux";

import '../styles/image-creator.scss';

const SliceIndicator = () => {

  const borderSlice = useSelector(state => state.borderImage.borderImageSlice); 
  const CSSMultiplicationFactor = 0.6;
  return (
    <div className="svg-overlay"> 
          <div className="slider" 
            style={{width:"100%", height:3, top:borderSlice.top*CSSMultiplicationFactor}}></div>
          <div className="slider" 
            style={{width:3, height:"100%", right:borderSlice.right*CSSMultiplicationFactor}}/>
          <div className="slider" 
            style={{width:"100%", height:3, bottom:borderSlice.bottom*CSSMultiplicationFactor}}/>
          <div className="slider" 
            style={{width:3, height:"100%", left :borderSlice.left*CSSMultiplicationFactor}}/>
    </div>

  )
}

export default SliceIndicator;