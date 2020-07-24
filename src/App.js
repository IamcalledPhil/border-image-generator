import React from 'react';
import './App.scss';
import './components/ImageCreator';
import ImageCreator from './components/ImageCreator';
import BorderImageSettings from './components/border-image-settings/BorderImageSettings';
import Header from './components/Header';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <ImageCreator/>
          <BorderImageSettings/>
        </div>
      </div>
    );
  }
}

export default App;




