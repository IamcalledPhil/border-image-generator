import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setRepeat} from '../../actions';
import '../../styles/border-image-settings.scss';

const RepeatSettings = () => {
  const borderRepeat = useSelector(state => state.borderImage.borderImageRepeat);
  const dispatch = useDispatch();
  const handleSetRepeat = (event) => {
    dispatch(setRepeat(event.target.value));
  }

  return (
    <section className="settings">
      <h2>Repeat</h2>
      <div className='settings-dropdown'>
      <select
        value={borderRepeat} 
        id={"repeat"} 
        onChange={handleSetRepeat}>
            <option value="stretch">stretch</option>
            <option value="repeat">repeat</option>
            <option value="round">round</option>
            <option value="space">space</option>
      </select>
    </div>
    </section>
  )
}

export default RepeatSettings;