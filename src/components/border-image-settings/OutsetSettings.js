import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setTopBorderOutset,
        setRightBorderOutset,
        setBottomBorderOutset,
        setLeftBorderOutset,
} from '../../actions';
import  {SettingsNumberEntry} from '../SettingsInputs';
import '../../styles/border-image-settings.scss';

const OutsetSettings = () => {
  const borderOutset = useSelector(state => state.borderImage.borderImageOutset);
  const dispatch = useDispatch();
  const handleSetBorderOutset = (event) => {
    switch (event.target.id){
      case "topoutset":
        dispatch(setTopBorderOutset(event.target.value));
        break;
      case "rightoutset":
        dispatch(setRightBorderOutset(event.target.value));
        break;
      case "bottomoutset":
        dispatch(setBottomBorderOutset(event.target.value));
        break;
      case "leftoutset":
        dispatch(setLeftBorderOutset(event.target.value));
        break;
      default:
        console.log("unrecognised side for border outset");
    }
  }

  return (
    <section className="outset-settings">
      <h2>Outset</h2>
      <SettingsNumberEntry
        type="outset"
        position="top"
        value={borderOutset.top}
        onChange={handleSetBorderOutset}
        label="Top"/>
      <SettingsNumberEntry
        type="outset"
        position="right"
        value={borderOutset.right}
        onChange={handleSetBorderOutset}
        label="Right"/>
      <SettingsNumberEntry
        type="outset"
        position="bottom"
        value={borderOutset.bottom}
        onChange={handleSetBorderOutset}
        label="Bottom"/>
      <SettingsNumberEntry
        type="outset"
        position="left"
        value={borderOutset.left}
        onChange={handleSetBorderOutset}
        label="Left"/>
    </section>
  )
}

export default OutsetSettings;