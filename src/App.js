import React from 'react';
import './styles/App.scss';
import './components/ImageCreator';
import ImageCreator from './components/ImageCreator';
import BorderImageSettings from './components/border-image-settings/BorderImageSettings';
import Header from './components/Header';
import Output from './components/Output';

class App extends React.Component {
  
  render () {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <ImageCreator/>
          <div class="settings-output-container">
            <Output/>
            <BorderImageSettings/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




