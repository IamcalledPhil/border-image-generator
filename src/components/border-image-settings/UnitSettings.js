import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setUnit} from '../../actions';
import '../../styles/border-image-settings.scss';

const UnitSettings = () => {
  const unit = useSelector(state => state.borderImage.unit);
  const dispatch = useDispatch();
  const handleSetUnit = (event) => {
    dispatch(setUnit(event.target.value));
  }

  return (
    <section className="settings">
      <h2>Unit</h2>
      <div className='settings-dropdown'>
        <select
          value={unit} 
          id={"repeat"} 
          onChange={handleSetUnit}>
              <option value="px">px</option>
              <option value="em">em</option>
              <option value="%">%</option>
        </select>
      </div>
    </section>
  )
}

export default UnitSettings;