import React from 'react';
import './App.css';
import saveSVG  from 'save-svg-as-png';


const BrushStroke1 = (props) => {
  console.log(props.translateX);
  const move=`translate(${props.translateX},${props.translateY})`;

  let path = <path d="M0,13S29.15,0,36.79,0,89.62,13,89.62,13s-29,3-47.32,3C27,16,0,13,0,13Z" fill="#262626" transform={move}/>;
  return (path);
}



class App extends React.Component {

  constructor(props) {
    super(props);
    this.downloadbleSVG = React.createRef();
    this.state={svgURI: ''};
  }

  componentDidMount () {
    saveSVG.svgAsDataUri(this.downloadbleSVG.current)
      .then(uri => this.setState({svgURI: uri}))
      .then(() => console.log(this.state.svgURI));
    
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <section className="canvas-container">
          <svg ref={this.downloadbleSVG}>
            <BrushStroke1 translateX="0" translateY="0"/>
            <BrushStroke1 translateX="100" translateY="100"/>
          </svg>
        </section>
  
        <a href={this.state.svgURI} download>Download</a>
      </div>
    );
  }
}

export default App;
