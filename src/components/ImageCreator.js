import React from 'react';
import { useSelector, connect } from "react-redux";
import { setSVGUri, 
  setStrokeLength, 
  setStrokeWidth, 
  setFirstStrokeNumber,
  setSecondStrokeNumber,
  setThirdStrokeNumber,
  setFourthStrokeNumber, 
  setFifthStrokeNumber
} from '../actions';
import '../styles/image-creator.scss';
import saveSVG  from 'save-svg-as-png';
import {
        assignDValueFromStrokeType,
        assignTranslateYFromStrokeType,
        assignTranslateXFromStrokeType,
        translateEdge
      } from '../modules/svg-helpers';



const BrushStroke = props => {
  const strokeLength = useSelector(state => state.imageCreator.strokeLength);
  const strokeWidth = useSelector(state => state.imageCreator.strokeWidth);
  const translateX= assignTranslateXFromStrokeType(props.strokeType, props.index, props.translateX);
  const translateY= assignTranslateYFromStrokeType(props.strokeType, props.index);
  // TODO: find a way to calculate magic number for second translate
  const move=` translate(${translateX},${translateY}) translate(${strokeLength*-(props.rectWidth/15)}, 0) scale(${strokeLength},-${strokeWidth}) `;
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
        rectWidth={props.rectConfig.width}
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
  const firstStrokeNumber = useSelector(state => state.imageCreator.firstStrokeNumber);
  const secondStrokeNumber = useSelector(state => state.imageCreator.secondStrokeNumber);
  const thirdStrokeNumber = useSelector(state => state.imageCreator.thirdStrokeNumber);
  const fourthStrokeNumber = useSelector(state => state.imageCreator.fourthStrokeNumber);
  const fifthStrokeNumber = useSelector(state => state.imageCreator.fifthStrokeNumber);

  const translateConfig = translateEdge (props.side, props.rectConfig.x, props.rectConfig.y)

  return (
    // translate per side, rotate per side, scale to flip so it goes outwards from rect edge
    <g transform={`translate(${translateConfig.x},${translateConfig.y}) rotate(${translateConfig.angle}) scale(1,-1)`}>
      <BrushStrokes strokeNumber={firstStrokeNumber} rectConfig={props.rectConfig} strokeType={1}/>
      <BrushStrokes strokeNumber={secondStrokeNumber} rectConfig={props.rectConfig} strokeType={2}/>
      <BrushStrokes strokeNumber={thirdStrokeNumber} rectConfig={props.rectConfig} strokeType={3}/>
      <BrushStrokes strokeNumber={fourthStrokeNumber} rectConfig={props.rectConfig} strokeType={4}/>
      <BrushStrokes strokeNumber={fifthStrokeNumber} rectConfig={props.rectConfig} strokeType={5}/>
     </g>
  )
}


class ImageCreator extends React.Component {

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

  handleSetStrokeWidth = (event) => {
    this.props.setStrokeWidth(event.target.value);
  }

  handleSetStrokeNumber = (event) => {
    switch (event.target.id){
      case "firstStrokeNumber": 
        this.props.setFirstStrokeNumber(event.target.value);
        break;
      case "secondStrokeNumber": 
        this.props.setSecondStrokeNumber(event.target.value);
        break;
      case "thirdStrokeNumber": 
        this.props.setThirdStrokeNumber(event.target.value);
        break;
      case "fourthStrokeNumber": 
        this.props.setFourthStrokeNumber(event.target.value);
        break;
      case "fifthStrokeNumber": 
        this.props.setFifthStrokeNumber(event.target.value);
        break;
      default: 
        console.log("Error, no stroke number recognised");
    }
  }

  render () {
    return (
      <div className="image-creator">
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
          <a href={this.props.svgURI} onClick={this.handleSVGUriChange} download>Download</a>

        </section>

        <section className="stroke-settings">
          <div className="settings-bar">
            <input type="range" min="0.5" max="1.4" value={this.props.strokeLength} 
            id="strokeLength" 
            step="0.1"
            onChange={this.handleSetStrokeLength}/>
            <label htmlFor="strokeLength">Stroke length</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0.7" max="1.8" value={this.props.strokeWidth} 
            id="strokeWidth" 
            step="0.1"
            onChange={this.handleSetStrokeWidth}/>
            <label htmlFor="strokeWidth">Stroke width</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0" max="10" value={this.props.firstStrokeNumber} 
            id="firstStrokeNumber" 
            onChange={this.handleSetStrokeNumber}/>
            <label htmlFor="firstStrokeNumber">Number of type 1 strokes per side</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0" max="10" value={this.props.secondStrokeNumber} 
            id="secondStrokeNumber" 
            onChange={this.handleSetStrokeNumber}/>
            <label htmlFor="secondStrokeNumber">Number of type 2 strokes per side</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0" max="10" value={this.props.thirdStrokeNumber} 
            id="thirdStrokeNumber" 
            onChange={this.handleSetStrokeNumber}/>
            <label htmlFor="thirdStrokeNumber">Number of type 3 strokes per side</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0" max="8" value={this.props.fourthStrokeNumber} 
            id="fourthStrokeNumber" 
            onChange={this.handleSetStrokeNumber}/>
            <label htmlFor="fourthStrokeNumber">Number of type 4 strokes per side</label>
          </div>
          <div className="settings-bar">
            <input type="range" min="0" max="10" value={this.props.fifthStrokeNumber} 
            id="fifthStrokeNumber" 
            onChange={this.handleSetStrokeNumber}/>
            <label htmlFor="fifthStrokeNumber">Number of type 5 strokes per side</label>
          </div>
        </section>

      </div>
    );
  }
}

function select(state) {
  return {
    svgURI: state.imageCreator.svgURI,
    strokeLength: state.imageCreator.strokeLength,
    strokeWidth: state.imageCreator.strokeWidth,
    firstStrokeNumber: state.imageCreator.firstStrokeNumber,
    secondStrokeNumber: state.imageCreator.secondStrokeNumber,
    thirdStrokeNumber: state.imageCreator.thirdStrokeNumber,
    fourthStrokeNumber: state.imageCreator.fourthStrokeNumber,
    fithStrokeNumber: state.imageCreator.fithStrokeNumber,
  };
}

export default connect(
  select,
  { setSVGUri, 
    setStrokeLength, 
    setStrokeWidth, 
    setFirstStrokeNumber, 
    setSecondStrokeNumber,
    setThirdStrokeNumber,
    setFourthStrokeNumber,
    setFifthStrokeNumber
  }
)(ImageCreator)
