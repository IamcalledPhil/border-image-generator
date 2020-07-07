import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setTopBorderSlice,
        setRightBorderSlice,
        setBottomBorderSlice,
        setLeftBorderSlice,
} from '../../actions';
import  {SettingsNumberEntry} from '../SettingsInputs';
import '../../styles/border-image-settings.scss';

const SliceSettings = () => {
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
    <section className="slice-settings">
      <h2>Slice</h2>
      <SettingsNumberEntry
        type="slice"
        position="top"
        value={borderSlice.top}
        onChange={handleSetBorderSlice}
        label="Top"/>
      <SettingsNumberEntry
        type="slice"
        position="right"
        value={borderSlice.right}
        onChange={handleSetBorderSlice}
        label="Right"/>
      <SettingsNumberEntry
        type="slice"
        position="bottom"
        value={borderSlice.bottom}
        onChange={handleSetBorderSlice}
        label="Bottom"/>
      <SettingsNumberEntry
        type="slice"
        position="left"
        value={borderSlice.left}
        onChange={handleSetBorderSlice}
        label="Left"/>
    </section>
  )
}

export default SliceSettings;