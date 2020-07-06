import React from 'react';
import './App.scss';
import './components/ImageCreator';
import ImageCreator from './components/ImageCreator';
import BorderImageSettings from './components/border-image-settings/BorderImageSettings';


class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <ImageCreator/>
        <BorderImageSettings/>
      </div>
    );
  }
}

export default App;




