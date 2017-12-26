import React from 'react';
import Line from './Line';
import SizeUtils from "./util/SizeUtils";
import '../stylesheets/terminator.less';

/**
 * Properties
 * {!{text:string, color: string, background: string}} text e.g. {text: 'test', color: 'white', background: 'red'}
 * {string} image
 * {boolean} expand
 * {string} color e.g. 'red' or '#333' default 'cadetblue' the color of the starter
 * {string} lineWidth e.g. '100px' default '100px'
 * {string} pointSize e.g. '28px'  default '28px'
 */
export default class Terminator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showImage: false
    };

    this.handlePointClick = this.handlePointClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handlePointClick(e) {
    if (this.props.expand) {
      this.setState(pre => (pre.showImage ? {} : {showImage: true}));
      e.stopPropagation();
    }
  }

  handleRightClick(e) {
    if (this.props.expand) {
      this.setState(pre => {
        if (pre.showImage) {
          return {showImage: false};
        }
      });
    }
  }

  render() {
    return (
      <div className={'terminator'}>
        <Line width={this.getLineWidth()} color={this.getColor()}/>
        <div className={'terminator-point ' + (this.props.expand ? 'expand' : '')} style={this.getPointStyle()}
             onClick={this.handlePointClick}>
          {this.props.expand && (
            <label className={'terminator-point-label '}
                   style={{
                     color: this.props.text.color,
                     background: this.props.text.background
                   }}> {this.props.text.text} </label>)}
          {this.props.expand && (
            <div className={'terminator-point-image ' + (this.state.showImage ? '' : 'hidden')}
                 style={{backgroundImage: `url(${this.props.image})`}} onContextMenu={this.handleRightClick}/>
          )}
        </div>
      </div>
    );
  }

  getPointStyle() {
    return {
      width: this.props.expand ? '150vw' : this.getPointSize(),
      height: this.props.expand ? '150vw' : this.getPointSize(),
      borderRadius: this.props.expand ? '75vw' : `${SizeUtils.getValue(this.getPointSize())}${SizeUtils.getUnit(this.getPointSize()) || 'px'}`,
      marginLeft: this.props.expand ? `calc(${SizeUtils.getValue(this.getPointSize()) / 2}${SizeUtils.getUnit(this.getPointSize())} - 75vw)` : '0',
      background: this.getColor()
    };
  }

  /*---------------------Properties with default value---------------------------*/
  getTexts() {
    return [...this.props.texts].map(({text, color = 'white', background = 'cadetblue'} = {}) => ({
      text: text,
      color: color,
      background: background,
    }));
  }

  getColor() {
    return this.props.color || 'cadetblue';
  }

  getLineWidth() {
    return this.props.lineWidth || '100px';
  }

  getPointSize() {
    return this.props.pointSize || '28px';
  }
}