import React from 'react';
import Line from './Line';
import SizeUtils from './util/SizeUtils';
import '../stylesheets/starter.less';

/**
 * Properties:
 * {string} text  e.g. 'Hello World'   the text to be shown at the beginning
 * {string} color e.g. 'red' or '#333' default 'cadetblue' the color of the starter
 * {string} lineWidth e.g. '100px' default '100px'
 * {string} pointSize e.g. '28px'  default '28px'
 *
 * Event
 * onShrink
 */
export default class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      original: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((pre, props) => {
      if (pre.original) {
        props.onShrink && setTimeout(() => props.onShrink(), 300);
        return {original: false};
      }
    });
    e.stopPropagation();
  }

  render() {
    return (
      <div className='starter' onClick={this.handleClick}>
        <div className={'point ' + (this.state.original ? 'original' : '')} style={this.getPointStyle()}>
          {this.state.original && <label className='label'>{this.props.text}</label>}
        </div>
        <Line color={this.getColor()} width={this.getLineWidth()}/>
      </div>
    );
  }

  getPointStyle() {
    return {
      width: this.state.original ? '150vw' : this.getPointSize(),
      height: this.state.original ? '150vw' : this.getPointSize(),
      borderRadius: this.state.original ? '75vw' : `${SizeUtils.getValue(this.getPointSize())}${SizeUtils.getUnit(this.getPointSize()) || 'px'}`,
      marginLeft: this.state.original ? '-25vw' : '0',
      marginTop: this.state.original ? 'calc(50vh - 75vw)':'0',
      background: this.getColor()
    };
  }

  /*---------------------Properties with default value---------------------------*/
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