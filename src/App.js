import React from 'react';
import { useDispatch, useSelector, connect } from "react-redux";
import { setSVGUri, setStrokeLength } from './actions';
import './App.scss';
import saveSVG  from 'save-svg-as-png';
import {assignDValueFromStrokeType, assignTranslateYFromStrokeType, assignTranslateXFromStrokeType} from './modules/svg-helpers';



const BrushStroke = props => {
  const strokeLength = useSelector(state => state.strokeLength);
  const strokeWidth = useSelector(state => state.strokeWidth);
  const translateX= assignTranslateXFromStrokeType(props.strokeType, props.index, props.translateX);
  const translateY= assignTranslateYFromStrokeType(props.strokeType, props.index);
  // TODO: find a way to calculate magic number for second translate
  const move=` translate(${translateX},${translateY}) translate(${strokeLength*-20}, 0) scale(${strokeLength},-1) `;
  const d = assignDValueFromStrokeType(props.strokeType);

  const path = <path d={d} fill="#000000" transform={move}/>;
  return (path);
}

const BrushStrokes = props => {
  let i = 0;
  let brushStrokes = [];
  while (i < props.strokeNumber) {
    // at the moment only supports square, would need to add height support for rectangle
    brushStrokes.push(
      <BrushStroke translateX={i*(props.rectConfig.width/props.strokeNumber)} 
        strokeType={props.strokeType}
        index={i}
        key={i}/>
    );
    i++;
  }

  return (
    brushStrokes.map( stroke => {return stroke})
  );
}

const Edge = props => {
  let angle = 0;
  //initially move the edge to where the rectangle is
  let translateEdgeX = props.rectConfig.x;
  let translateEdgeY = props.rectConfig.y;

  switch(props.side) {
    case "right":
      angle = 90;
      translateEdgeX = translateEdgeX + 300;
      break;
    case "bottom":
        angle = 180;
        translateEdgeY = translateEdgeY + 300;
        translateEdgeX = translateEdgeX + 300;
      break;
    case "left":
      angle = 270;
      translateEdgeY = translateEdgeY + 300;
      break;
    default: // on top
    angle = 0;
  }

  return (
    // translate per side, rotate per side, scale to flip so it goes outwards from rect edge
    <g transform={`translate(${translateEdgeX},${translateEdgeY}) rotate(${angle}) scale(1,-1)`}>
      <BrushStrokes strokeNumber={6} rectConfig={props.rectConfig} strokeType={1}/>
      <BrushStrokes strokeNumber={6} rectConfig={props.rectConfig} strokeType={2}/>
      <BrushStrokes strokeNumber={5} rectConfig={props.rectConfig} strokeType={3}/>
      <BrushStrokes strokeNumber={3} rectConfig={props.rectConfig} strokeType={4}/>
      <BrushStrokes strokeNumber={4} rectConfig={props.rectConfig} strokeType={5}/>

     </g>
  )
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.downloadbleSVG = React.createRef();
    this.rectConfig={
      height: 300,
      width: 300, 
      x: 100,
      y: 100
    }
  }

  handleSVGUriChange = () => {
    saveSVG.svgAsDataUri(this.downloadbleSVG.current)
    .then(uri => this.props.setSVGUri(uri));
  }

  componentDidMount () {
   this.handleSVGUriChange();
  }

  handleSetStrokeLength = (event) => {
    this.props.setStrokeLength(event.target.value);

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <section className="canvas-container">
          <svg viewBox="0 0 500 500"ref={this.downloadbleSVG}>
            <rect 
              x={this.rectConfig.x} 
              y={this.rectConfig.y} 
              width={this.rectConfig.width} 
              height={this.rectConfig.height} 
              style={{fill:'black'}}/>
            <Edge side="top" rectConfig={this.rectConfig}/>
            <Edge side="right" rectConfig={this.rectConfig}/>
            <Edge side="bottom" rectConfig={this.rectConfig}/>
            <Edge side="left" rectConfig={this.rectConfig}/>
          </svg>
        </section>

        <section className="stroke-settings">
          <input type="range" min="0.5" max="1.5" value={this.props.strokeLength} 
          id="strokeLength" 
          step="0.1"
          onChange={this.handleSetStrokeLength}/>
          <label htmlFor="strokeLength">Stroke length</label>
        </section>

        <a href={this.props.svgURI} onClick={this.handleSVGUriChange} download>Download</a>
      </div>
    );
  }
}

function select(state) {
  return {
    svgURI: state.svgURI,
    strokeLength: state.strokeLength,
    strokeWidth: state.strokeWidth,
    strokeNumber: state.strokeNumber
  };
}

export default connect(
  select,
  { setSVGUri, setStrokeLength }
)(App)
