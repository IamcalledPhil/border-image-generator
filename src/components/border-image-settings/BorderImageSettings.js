import React from 'react';

import UnitSettings from './UnitSettings';
import WidthSettings from './WidthSettings';
import OutsetSettings from './OutsetSettings';
import SliceSettings from './SliceSettings';
import RepeatSettings from './RepeatSettings';

import '../../styles/border-image-settings.scss';

const BorderImageSettings = () => {


  return (
    <div className="border-image-settings">
        <h1>Border Settings</h1>
        <div className="input-content">
          <UnitSettings/>
          <WidthSettings/>
          <OutsetSettings/>
          <SliceSettings/>
          <RepeatSettings/>
      </div>
    </div>
  )
};

export default BorderImageSettings;