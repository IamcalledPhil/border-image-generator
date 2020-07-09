import React from 'react';
import { useSelector, connect } from "react-redux";
import { setSVGUri, 
  setImageColor,
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
import { SettingsSlider } from './SettingsInputs';
import InteractiveSliceSlider from './InteractiveSliceSlider';


const BrushStroke = props => {
  const imageColor = useSelector(state => state.imageCreator.imageColor);
  const strokeLength = useSelector(state => state.imageCreator.strokeLength);
  const strokeWidth = useSelector(state => state.imageCreator.strokeWidth);
  const translateX= assignTranslateXFromStrokeType(props.strokeType, props.index, props.translateX);
  const translateY= assignTranslateYFromStrokeType(props.strokeType, props.index);
  // TODO: find a way to calculate magic number for second translate
  const move=` translate(${translateX},${translateY}) translate(${strokeLength*-(props.rectWidth/15)}, 0) scale(${strokeLength},-${strokeWidth}) `;
  const d = assignDValueFromStrokeType(props.strokeType);

  const path = <path d={d} fill={imageColor} transform={move}/>;
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
    this.viewBoxHeight = 500;
    this.viewBoxWidth = 500;
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

  handleImageColorChange = (event) => {
    this.props.setImageColor(event.target.value);
    this.handleSVGUriChange();
  }

  handleSetStrokeLength = (event) => {
    this.props.setStrokeLength(event.target.value);
    this.handleSVGUriChange();
  }

  handleSetStrokeWidth = (event) => {
    this.props.setStrokeWidth(event.target.value);
    this.handleSVGUriChange();
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
    this.handleSVGUriChange();
  }

  render () {
    return (
      <div className="image-creator">
        <section className="canvas-container">
          <svg viewBox={`0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`}ref={this.downloadbleSVG}>
            <rect 
              x={this.rectConfig.x} 
              y={this.rectConfig.y} 
              width={this.rectConfig.width} 
              height={this.rectConfig.height} 
              style={{fill:this.props.imageColor}}/>
            <Edge side="top" rectConfig={this.rectConfig}/>
            <Edge side="right" rectConfig={this.rectConfig}/>
            <Edge side="bottom" rectConfig={this.rectConfig}/>
            <Edge side="left" rectConfig={this.rectConfig}/>
          </svg>
          <InteractiveSliceSlider parentHeight={this.viewBoxHeight} parentWidth={this.viewBoxWidth}/>
        </section>
        <a href={this.props.svgURI} onClick={this.handleSVGUriChange} download>Download image</a>

        <section className="stroke-settings">
          <SettingsSlider
            type="length"
            position="stroke"
            range={{min: 0.5, max: 1.4}}
            value={this.props.strokeLength}
            onChange={this.handleSetStrokeLength}
            label="Stroke length"/>
          <SettingsSlider
            type="width"
            position="stroke"
            range={{min: 0.7, max: 2.1}}
            value={this.props.strokeWidth}
            onChange={this.handleSetStrokeWidth}
            label="Stroke width"/>
          <SettingsSlider
            type="StrokeNumber"
            position="first"
            range={{min: 0, max: 10}}
            value={this.props.firstStrokeNumber}
            onChange={this.handleSetStrokeNumber}
            label="Number of type 1 strokes per side"/>
          <SettingsSlider
            type="StrokeNumber"
            position="second"
            range={{min: 0, max: 10}}
            value={this.props.secondStrokeNumber}
            onChange={this.handleSetStrokeNumber}
            label="Number of type 2 strokes per side"/>
          <SettingsSlider
            type="StrokeNumber"
            position="third"
            range={{min: 0, max: 10}}
            value={this.props.thirdStrokeNumber}
            onChange={this.handleSetStrokeNumber}
            label="Number of type 3 strokes per side"/>
          <SettingsSlider
            type="StrokeNumber"
            position="fourth"
            range={{min: 0, max: 10}}
            value={this.props.fourthStrokeNumber}
            onChange={this.handleSetStrokeNumber}
            label="Number of type 4 strokes per side"/>
          <SettingsSlider
            type="StrokeNumber"
            position="fifth"
            range={{min: 0, max: 10}}
            value={this.props.fifthStrokeNumber}
            onChange={this.handleSetStrokeNumber}
            label="Number of type 5 strokes per side"/>
            <div>
              <label htmlFor="colorPicker">Color:</label>
                <input type="color" id="colorPicker" name="colorPicker"
                  onChange={this.handleImageColorChange}
                  value={this.props.imageColor}/>
            </div> 
        </section>

      </div>
    );
  }
}

function select(state) {
  return {
    svgURI: state.imageCreator.svgURI,
    imageColor: state.imageCreator.imageColor,
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
    setImageColor,
    setStrokeLength, 
    setStrokeWidth, 
    setFirstStrokeNumber, 
    setSecondStrokeNumber,
    setThirdStrokeNumber,
    setFourthStrokeNumber,
    setFifthStrokeNumber
  }
)(ImageCreator)
