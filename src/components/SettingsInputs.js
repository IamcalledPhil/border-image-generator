import React from 'react';

import '../styles/settings-inputs.scss';

const SettingsSlider = props => {
  const step = props.step || 0.1;

  return (
    <div className='settings-slider'>
      <label htmlFor={props.position+props.type}>{props.label}</label>
      <input type="range"
        min={props.range.min} 
        max={props.range.max}
        value={props.value} 
        id={props.position+props.type} 
        step={step}
        onChange={props.onChange}/>
    </div>
  )
};

const SettingsNumberEntry = props => {
  const step = props.step || 1;
  return (
    <div className='settings-number-entry'>
      <label htmlFor={props.position+props.type}>{props.label}</label>
      <input type="number"
        value={props.value} 
        id={props.position+props.type} 
        step={step}
        onChange={props.onChange}/>
    </div>
  )
};

export  {SettingsSlider, SettingsNumberEntry};

 