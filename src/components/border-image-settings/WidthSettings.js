import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setTopBorderWidth,
        setRightBorderWidth,
        setBottomBorderWidth,
        setLeftBorderWidth,
} from '../../actions';
import  {SettingsNumberEntry} from '../SettingsInputs';
import '../../styles/border-image-settings.scss';

const WidthSettings = () => {
  const borderWidth = useSelector(state => state.borderImage.borderWidth);
  const dispatch = useDispatch();
  const handleSetBorderWidth = (event) => {
    switch (event.target.id){
      case "topwidth":
        dispatch(setTopBorderWidth(event.target.value));
        break;
      case "rightwidth":
        dispatch(setRightBorderWidth(event.target.value));
        break;
      case "bottomwidth":
        dispatch(setBottomBorderWidth(event.target.value));
        break;
      case "leftwidth":
        dispatch(setLeftBorderWidth(event.target.value));
        break;
      default:
        console.log("unrecognised side for border width");
    }
  }

  return (
    <section className="width-settings">
      <h2>Width</h2>
      <SettingsNumberEntry
        type="width"
        position="top"
        value={borderWidth.top}
        onChange={handleSetBorderWidth}
        label="Top"/>
      <SettingsNumberEntry
        type="width"
        position="right"
        value={borderWidth.right}
        onChange={handleSetBorderWidth}
        label="Right"/>
      <SettingsNumberEntry
        type="width"
        position="bottom"
        value={borderWidth.bottom}
        onChange={handleSetBorderWidth}
        label="Bottom"/>
      <SettingsNumberEntry
        type="width"
        position="left"
        value={borderWidth.left}
        onChange={handleSetBorderWidth}
        label="Left"/>
    </section>
  )
}



export default WidthSettings;