import React from 'react';
import '../styles/settings-inputs.scss';

const SettingsSlider = props => {
  const step = props.step || 0.1;

  return (
    <div className='settings-slider'>
      <input type="range"
        min={props.range.min} 
        max={props.range.max}
        value={props.value} 
        id={props.position+props.type} 
        step={step}
        onChange={props.onChange}/>
      <label htmlFor={props.position+props.type}>{props.label}</label>
    </div>
  )
};

const SettingsTextEntry = props => {
  const step = props.step || 0.1;
  return (
    <div className='settings-text-entry'>
      <input type="text"
        value={props.value} 
        id={props.position+props.type} 
        step={step}
        onChange={props.onChange}/>
      <label htmlFor={props.position+props.type}>{props.label}</label>
    </div>
  )
};

export  {SettingsSlider, SettingsTextEntry};

 