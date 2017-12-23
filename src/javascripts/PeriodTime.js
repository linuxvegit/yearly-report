import React from 'react';
import SizeUtils from './util/SizeUtils';
import '../stylesheets/period-time.less';

/**
 * Properties
 * {string} height e.g. '100px' the height after expand
 * {string} size   e.g. '25px'  the size(height) of child component title
 * {'top'|'bottom'} expand      the direction of expand
 * {string} color  e.g. 'red' or '#333' the color left line
 * {string} text   e.g. 'Some Title' the title to be shown beside left line
 *
 * Events
 * onExpanded
 */
export default class PeriodTime extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDefaultHeight() {
    return '300px';
  }

  render() {
    if (this.isExpand() && this.props.onExpanded) {
      setTimeout(() => this.props.onExpanded(), 300);
    }

    return (
        <div className={'period-time'} style={this.getStyle()}>
          {this.props.text && this.props.expand === 'bottom' &&
          <label className={'period-time-text'} style={this.getTimeStyle()}>{this.props.text}</label>}
          {this.props.children}
          {this.props.text && this.props.expand === 'top' &&
          <label className={'period-time-text'} style={this.getTimeStyle()}>{this.props.text}</label>}
        </div>
    )
  }

  getStyle() {
    const height = this.props.height || PeriodTime.getDefaultHeight();
    let style = {};

    if (this.isExpand()) {
      style = {
        height: height,
        [this.props.expand]: '-' + height,
        justifyContent: this.props.expand === 'top' ? 'flex-start' : 'flex-end'
      }
    } else {
      style = {
        height: this.props.size || 'auto',
        top: '0',
        bottom: '0'
      }
    }

    if (this.props.size && this.props.color) {
      const size = SizeUtils.getValue(this.props.size) / 2 + SizeUtils.getUnit(this.props.size);
      style.backgroundImage = `linear-gradient(90deg, transparent calc(${size} - 1px), ${this.props.color} calc(${size} - 1px), ${this.props.color} calc(${size} + 1px), transparent calc(${size} + 1px))`;
    }

    return style;
  }

  getTimeStyle() {
    const size = SizeUtils.getValue(this.props.size) || 0;
    const unit = SizeUtils.getUnit(this.props.size) || 'px';
    const height = SizeUtils.getValue(this.props.height || PeriodTime.getDefaultHeight());
    const heightUnit = SizeUtils.getUnit(this.props.height || PeriodTime.getDefaultHeight());
    const width = `calc(${height + heightUnit} - ${size + unit})`;
    return {
      width: width,
      maxWidth: width,
      left: `calc(${size + unit} - ${height / 2 + heightUnit} - 1px - 1rem)`,
      [this.props.expand]: `calc(${height / 2 + heightUnit} - ${size / 2 + unit} - 1rem)`
    };
  }

  isExpand() {
    return this.props.expand === 'top' || this.props.expand === 'bottom';
  }


}